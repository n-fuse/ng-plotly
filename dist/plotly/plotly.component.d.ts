import { OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
export declare const PlotlyEvent: {
    Hover: string;
    Unhover: string;
    Click: string;
    DoubleClick: string;
    ClickAnnotation: string;
    AfterPlot: string;
    Redraw: string;
    Restyle: string;
    Relayout: string;
    Selecting: string;
    Selected: string;
    Deselect: string;
};
export declare class PlotlyComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly cd;
    private static readonly Tag;
    private tag;
    private resizing;
    private resizeHandler;
    private changeAction;
    plot: any;
    afterPlot: boolean;
    private debug;
    private onResizeTimeOut;
    plotId: string;
    plotClass: string;
    data: any[];
    layout: any;
    configuration: any;
    events: any;
    frames: any[];
    width: number;
    height: number;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private ngOnChanges(changes);
    private applyChanges();
    restyle(update: any, traces?: number[]): Promise<any>;
    resize(event?: Event): Promise<any>;
    relayout(layout?: any): Promise<any>;
    update(dataUpdate: any, layoutUpdate: any): Promise<any>;
    redraw(): Promise<any>;
    recreate(): Promise<any>;
    private attachEventListeners(plot, events);
    removeEventListeners(): void;
    addTraces(traces: any | any[], index?: number): Promise<any>;
    deleteTraces(traces: number | number[]): Promise<any>;
    animate(update: any, animation: any): Promise<any>;
    addFrames(frames: any[], indices?: number[]): Promise<any>;
    deleteFrames(indices: number[]): Promise<any>;
    ngOnDestroy(): void;
}
