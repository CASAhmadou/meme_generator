/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemeListComponent } from './meme-list.component';

describe('MemeListComponent', () => {
  let component: MemeListComponent;
  let fixture: ComponentFixture<MemeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
