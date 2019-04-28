package com.login.loginapp;

import android.app.ProgressDialog;
import android.content.Intent;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.InputType;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText username;
    EditText password;
    Button loginButton;
    int counter=3;
    int time=10;
    Button eyeButton = (Button) findViewById(R.id.eyeButton);
    /////////////This Handler handle Thread after 10sec///////////
    Handler handler1=new Handler(){
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            counter=3;
            time=10;
            loginButton.setText("LOGIN");
            loginButton.setEnabled(true);
            loginButton.setBackgroundResource(R.drawable.shadow);
        }
    };
    ///////////This Handler call after every 1sec for 10 times///////
    Handler handler2=new Handler(){
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            loginButton.setText(String.valueOf(time)+" sec");
        }
    };

    ///////////Starting Point of Activity////////////
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        username=(EditText) findViewById(R.id.username);
        password=(EditText) findViewById(R.id.password);
        loginButton=(Button) findViewById(R.id.loginButton);
        ///////This is When user clicks eye Button/////////////////
        hideAndShow();
    }
    /////////This Method Run When Login Button Clicked////////
    public void loginClicked(View view){
        //////If inputs are not empty and matched this if loop starts and
        //////start the another activity
        if(validate() && infoMatch()){
            final ProgressDialog progressDialog=new ProgressDialog(this,R.style.AppTheme_Dark_Dialog);
            progressDialog.setMessage("Please Wait..");
            progressDialog.show();
            new android.os.Handler().postDelayed(
                    new Runnable() {
                        @Override
                        public void run() {
                            Intent intent=new Intent(MainActivity.this,Main2Activity.class);
                            startActivity(intent);
                            progressDialog.dismiss();
                        }
                    }
                    ,2000);
        }
        ///////If even one condition is not matched this else loop starts//////////////
        else{
            if(validate()){
                Toast.makeText(this,"Doesn't match",Toast.LENGTH_SHORT).show();
                ///////when the user enter wrong inputs this will decrease their chances//////
                chancesLeft();
            }

        }
    }
    /////////////this methos take care of matching the input text/////////////
    public boolean infoMatch(){
        String user=username.getText().toString();
        String pass=password.getText().toString();
        boolean check=false;
        //Pro tip always use equals for comapring strings never use "=="
        if(user.equalsIgnoreCase("root") && pass.equalsIgnoreCase("password")){
            return true;
        }
        else{
            return false;
        }

    }
    //////////this will take care that input fields are not empty/////////////
    public boolean validate() {
        String user_name=username.getText().toString();
        String pass_word = password.getText().toString();
        if(user_name.isEmpty()){
            username.setError("Enter A valid username");
            return false;
        }
        else{
            username.setError(null);
            if(pass_word.isEmpty()){
                password.setError("Password between 4 to 10");
                return false;
            }
            else{
                password.setError(null);
            }
            return true;
        }


    }

    public void chancesLeft(){
        counter--;
        switch (counter){
            case 2:
                loginButton.setText("2-LEFT");
                break;
            case 1:
                loginButton.setText("1-LEFT");
                break;
            case 0:
                blockTheButton();
                break;

        }
    }

    public void blockTheButton(){
        loginButton.setText("10 sec");
        loginButton.setEnabled(false);
        loginButton.setBackgroundResource(R.drawable.grey);
        //////////////////This Thread run after every one sec , for 10 times and after every 1 sec
        //////////////////handler2 handles this Thread/////////////////////////////////////////////////////////////////
        Thread thread2=new Thread(
                new Runnable() {
                    @Override
                    public void run() {
                        while(time>1) {
                            synchronized (this){
                                try {
                                    wait(1000);
                                } catch (InterruptedException e) {
                                    e.printStackTrace();
                                }
                                time--;
                            }
                            handler2.sendEmptyMessage(0);
                        }

                    }
                }
        );
        thread2.start();
//////////////////This Thread run in background and after 10 secs handler1 handle this Thread/////////////////////////
        Thread thread1=new Thread(
                new Runnable() {
                    @Override
                    public void run() {
                        synchronized (this){
                            try {
                                wait(10000);
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                        }
                        handler1.sendEmptyMessage(0);
                    }
                }
        );
        thread1.start();
    }
    ///////////////This is when facebook button Clicked///////////////////////////////////////////////
    public void facebookClicked(View view){
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_VIEW);
        intent.addCategory(Intent.CATEGORY_BROWSABLE);
        intent.setData(Uri.parse("http://www.facebook.com"));
        startActivity(intent);
    }

    public void hideAndShow(){
        eyeButton.setOnTouchListener(
                new View.OnTouchListener() {
                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        switch ( event.getAction() ) {
                            case MotionEvent.ACTION_DOWN:
                                password.setInputType(InputType.TYPE_CLASS_TEXT);
                                break;
                            case MotionEvent.ACTION_UP:
                                password.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
                                break;
                        }
                        return true;
                    }
                }
        );
    }
}
