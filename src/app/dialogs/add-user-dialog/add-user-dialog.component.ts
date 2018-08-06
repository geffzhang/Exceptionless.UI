import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions, } from 'ngx-modal-dialog';
import { ModalParameterService } from '../../service/modal-parameter.service';

@Component({
    selector: 'app-add-user-dialog',
    templateUrl: './add-user-dialog.component.html',
    styleUrls: ['./add-user-dialog.component.less']
})
export class AddUserDialogComponent implements OnInit {
    data = {
        email: ''
    };
    dataKey = '';
    constructor(
        private modalParameterService: ModalParameterService
    ) {}

    ngOnInit() {
    }

    dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
        // no processing needed
        this.dataKey = options.data['key'];
    }

    setEmail($event) {
        this.modalParameterService.setModalParameter(this.dataKey, this.data.email);
    }
}