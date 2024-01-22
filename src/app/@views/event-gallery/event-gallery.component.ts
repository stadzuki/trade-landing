import {
    ChangeDetectionStrategy,
    Component,
    ViewChild,
    TemplateRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'xm-event-gallery',
    templateUrl: './event-gallery.component.html',
    styleUrls: ['./event-gallery.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventGalleryComponent {
    private readonly items = Array.from({length: 10}, (_, i) => i);

    public displayedItems: number[] = this.items.slice(2, 7);
    public scrollLeftDisable: boolean = false;
    public scrollRightDisable: boolean = false;

    @ViewChild('galleryList') private galleryList: TemplateRef<any> | undefined;

    constructor() {
    }

    public onClick(target: 'left' | 'right'): void {
        if (target === 'right') {
            const nextIdx = this.displayedItems[this.displayedItems.length - 1] + 1;
            const nextItem = this.items[nextIdx];
            if (nextItem === undefined) {
                this.scrollRightDisable = true;
                return;
            }

            this.displayedItems.shift();
            this.displayedItems.push(nextItem);
        }

        if (target === 'left') {
            const prevIdx = this.displayedItems[0] - 1;
            const prevItem = this.items[prevIdx];
            if (prevItem === undefined) {
                this.scrollLeftDisable = true;
                return;
            }

            this.displayedItems.pop();
            this.displayedItems.unshift(prevItem);
        }

        this.scrollRightDisable = false;
        this.scrollLeftDisable = false;
    }
}
