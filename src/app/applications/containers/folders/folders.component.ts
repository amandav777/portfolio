import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Folder } from 'src/app/shared/models/folder';
import { FolderSelection } from 'src/app/shared/models/folder-selection';
import { MyStore } from 'src/app/shared/store/my-store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersComponent {
  myStore = inject(MyStore);

  @Input() folders: Folder[] = [];

  @Input() isFinderOpened = false;

  constructor() {}

  onFolderSelected(folderSelection: FolderSelection) {
    this.myStore.toggleFolder(folderSelection);
  }
}
