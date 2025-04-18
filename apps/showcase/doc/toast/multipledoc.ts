import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-multiple-demo',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Multiple toasts are displayed by passing an array to the <i>showAll</i> method of the <i>messageService</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-toast />
            <p-button pRipple (click)="show()" label="Multiple" severity="warn" />
        </div>
        <app-code [code]="code" selector="toast-multiple-demo"></app-code>
    `,
    providers: [MessageService]
})
export class MultipleDoc {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }

    code: Code = {
        basic: `<p-toast />
<p-button pRipple (click)="show()" label="Multiple" severity="warn" />`,
        html: `<div class="card flex justify-center">
    <p-toast />
    <p-button pRipple (click)="show()" label="Multiple" severity="warn" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-multiple-demo',
    templateUrl: './toast-multiple-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastMultipleDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }
}`
    };
}
