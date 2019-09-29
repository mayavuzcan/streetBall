/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewUpdateplayerComponent } from './newUpdateplayer.component';

describe('NewUpdateplayerComponent', () => {
  let component: NewUpdateplayerComponent;
  let fixture: ComponentFixture<NewUpdateplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
