(self["webpackChunkngx_slide_to_confirm"] = self["webpackChunkngx_slide_to_confirm"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1070:
/*!*************************************************************************!*\
  !*** ./projects/slide-to-confirm/src/lib/slide-to-confirm.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideToConfirmComponent": function() { return /* binding */ SlideToConfirmComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);




function SlideToConfirmComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx_r0.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.placeHolder, " ");
} }
function SlideToConfirmComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.successText, " ");
} }
function SlideToConfirmComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragMoved", function SlideToConfirmComponent_div_7_Template_div_cdkDragMoved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleMove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SlideToConfirmComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.confirmedIcon);
} }
class SlideToConfirmComponent {
    constructor() {
        this.color = 'rgba(0,212,255,1) ';
        this.backgroundColor = 'rgb(24, 201, 98)';
        this.placeHolder = 'Swipe To Confirm';
        this.class = '';
        this.successText = 'Confirmed';
        this.confirmedIcon = '✓';
        this.reset = false;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.resetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isConfirmed = false;
        this.opacity = 1;
        this.percentage = 0;
        this.percentageSuccess = 0;
    }
    ngOnInit() {
    }
    drop(event) {
        if (event.previousContainer !== event.container) {
            this.isConfirmed = true;
            this.opacity = 0;
            this.confirm.emit();
            this.percentageSuccess = 100;
        }
        else {
            this.percentage = 0;
            this.percentageSuccess = 0;
            this.resetAll();
        }
    }
    resetAll() {
        this.isConfirmed = false;
        this.opacity = 1;
        this.percentage = 0;
        this.percentageSuccess = 0;
    }
    handleMove(event) {
        this.percentage = this.calculatePercetage(event.distance.x, document.getElementById("slide-to-confirm-wrapper").clientWidth - 64);
        this.percentageSuccess = this.calculatePercetage(event.distance.x - 64, document.getElementById("slide-to-confirm-wrapper").clientWidth - 64);
        if (this.opacity >= 0 && this.opacity <= 1) {
            if (event.delta.x === 1) {
                this.opacity -= 0.01;
            }
            else if (event.delta.x === -1) {
                this.opacity += 0.01;
            }
        }
    }
    calculatePercetage(a, b) {
        return (a / b) * 100;
    }
}
SlideToConfirmComponent.ɵfac = function SlideToConfirmComponent_Factory(t) { return new (t || SlideToConfirmComponent)(); };
SlideToConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideToConfirmComponent, selectors: [["ngx-slide-to-confirm"]], inputs: { color: "color", backgroundColor: "backgroundColor", placeHolder: "placeHolder", class: "class", successText: "successText", confirmedIcon: "confirmedIcon", reset: "reset" }, outputs: { confirm: "confirm", resetEvent: "resetEvent" }, decls: 11, vars: 6, consts: [["id", "slide-to-confirm-wrapper", 1, "slide-to-confirm-wrapper"], [1, "slide-to-hint-text"], [3, "opacity", 4, "ngIf"], [4, "ngIf"], [1, "slide-to-confirm-boundry-wrapper"], ["cdkDropListGroup", ""], ["cdkDropList", "", 1, "slide-to-confirm-source", 3, "cdkDropListDropped"], ["class", "slide-to-confirm-handle", "cdkDrag", "", "cdkDragLockAxis", "x", "cdkDragBoundary", ".slide-to-confirm-boundry-wrapper", 3, "cdkDragMoved", 4, "ngIf"], [1, "spacer"], ["cdkDropList", "", 1, "slide-to-confirm-target", 3, "cdkDropListDropped"], ["class", "slide-to-confirm-handle", 4, "ngIf"], ["cdkDrag", "", "cdkDragLockAxis", "x", "cdkDragBoundary", ".slide-to-confirm-boundry-wrapper", 1, "slide-to-confirm-handle", 3, "cdkDragMoved"], [1, "slide-to-icon"], [1, "slide-to-confirm-handle"]], template: function SlideToConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideToConfirmComponent_span_2_Template, 2, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlideToConfirmComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SlideToConfirmComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SlideToConfirmComponent_div_7_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SlideToConfirmComponent_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideToConfirmComponent_div_10_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "linear-gradient(90deg, " + ctx.backgroundColor + " " + ctx.percentageSuccess + "%, " + ctx.color + " " + ctx.percentage + "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfirmed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag], styles: [".slide-to-confirm-wrapper[_ngcontent-%COMP%] {\n  margin: 16px;\n  border-radius: 32px;\n  background-color: #049aff;\n  background: linear-gradient(90deg, #18c962 0%, #00d4ff 0%);\n  padding: 4px;\n  position: relative;\n}\n.slide-to-confirm-wrapper[_ngcontent-%COMP%]   .slide-to-confirm-boundry-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.slide-to-confirm-wrapper[_ngcontent-%COMP%]   .slide-to-hint-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.slide-to-confirm-source[_ngcontent-%COMP%], .slide-to-confirm-handle[_ngcontent-%COMP%], .slide-to-confirm-target[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.slide-to-confirm-handle[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.slide-to-confirm-handle[_ngcontent-%COMP%]   .slide-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #2980b9;\n}\n.slide-to-confirm-handle.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLXRvLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBEQUFBO0VBR0EsWUFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FBSEo7QUFPQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpGO0FBZUE7RUFDRSxZQUFBO0FBWkY7QUFlQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBWkY7QUFjRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBWko7QUFlRTtFQUNFLGFBQUE7QUFiSiIsImZpbGUiOiJzbGlkZS10by1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXRvLWNvbmZpcm0td3JhcHBlciB7XG4gIG1hcmdpbjogMTZweDtcbiAgLy8gbWluLWhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0OWFmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjQsIDIwMSwgOTgpIDAlLCByZ2JhKDAsMjEyLDI1NSwxKSAwJSk7XG5cbiAgLy8gZGlzcGxheSAgICAgIDogZmxleDtcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnNsaWRlLXRvLWNvbmZpcm0tYm91bmRyeS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNsaWRlLXRvLWhpbnQtdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5zbGlkZS10by1jb25maXJtLXNvdXJjZSxcbi5zbGlkZS10by1jb25maXJtLWhhbmRsZSxcbi5zbGlkZS10by1jb25maXJtLXRhcmdldCB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG59XG5cbi8vIC5zbGlkZS10by1jb25maXJtLXNvdXJjZSB7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbi8vIH1cblxuLy8gLnNsaWRlLXRvLWNvbmZpcm0tdGFyZ2V0IHtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuLy8gfVxuXG4uc3BhY2VyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc2xpZGUtdG8tY29uZmlybS1oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAuc2xpZGUtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjMjk4MGI5O1xuICB9XG5cbiAgJi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 4977:
/*!**********************************************************************!*\
  !*** ./projects/slide-to-confirm/src/lib/slide-to-confirm.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideToConfirmModule": function() { return /* binding */ SlideToConfirmModule; }
/* harmony export */ });
/* harmony import */ var _slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-to-confirm.component */ 1070);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class SlideToConfirmModule {
}
SlideToConfirmModule.ɵfac = function SlideToConfirmModule_Factory(t) { return new (t || SlideToConfirmModule)(); };
SlideToConfirmModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SlideToConfirmModule });
SlideToConfirmModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SlideToConfirmModule, { declarations: [_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_0__.SlideToConfirmComponent], imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_0__.SlideToConfirmComponent] }); })();


/***/ }),

/***/ 9166:
/*!***********************************************************************!*\
  !*** ./projects/slide-to-confirm/src/lib/slide-to-confirm.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideToConfirmService": function() { return /* binding */ SlideToConfirmService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SlideToConfirmService {
    constructor() { }
}
SlideToConfirmService.ɵfac = function SlideToConfirmService_Factory(t) { return new (t || SlideToConfirmService)(); };
SlideToConfirmService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SlideToConfirmService, factory: SlideToConfirmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3363:
/*!*****************************************************!*\
  !*** ./projects/slide-to-confirm/src/public-api.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideToConfirmService": function() { return /* reexport safe */ _lib_slide_to_confirm_service__WEBPACK_IMPORTED_MODULE_0__.SlideToConfirmService; },
/* harmony export */   "SlideToConfirmComponent": function() { return /* reexport safe */ _lib_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_1__.SlideToConfirmComponent; },
/* harmony export */   "SlideToConfirmModule": function() { return /* reexport safe */ _lib_slide_to_confirm_module__WEBPACK_IMPORTED_MODULE_2__.SlideToConfirmModule; }
/* harmony export */ });
/* harmony import */ var _lib_slide_to_confirm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/slide-to-confirm.service */ 9166);
/* harmony import */ var _lib_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/slide-to-confirm.component */ 1070);
/* harmony import */ var _lib_slide_to_confirm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/slide-to-confirm.module */ 4977);
/*
 * Public API Surface of slide-to-confirm
 */





/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _projects_slide_to_confirm_src_lib_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/slide-to-confirm/src/lib/slide-to-confirm.component */ 1070);


class AppComponent {
    constructor() {
        this.title = 'NgxSlideToConfirm';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-slide-to-confirm");
    } }, directives: [_projects_slide_to_confirm_src_lib_slide_to_confirm_component__WEBPACK_IMPORTED_MODULE_0__.SlideToConfirmComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var projects_slide_to_confirm_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/slide-to-confirm/src/public-api */ 3363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            projects_slide_to_confirm_src_public_api__WEBPACK_IMPORTED_MODULE_1__.SlideToConfirmModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        projects_slide_to_confirm_src_public_api__WEBPACK_IMPORTED_MODULE_1__.SlideToConfirmModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map