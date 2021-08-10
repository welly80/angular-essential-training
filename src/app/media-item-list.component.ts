import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private MediaItemService: MediaItemService) {}

  ngOnInit(){
    this.mediaItems = this.MediaItemService.get();
  }
  onMediaItemDelete(mediaItem) { 
    this.MediaItemService.delete(mediaItem);
  }
}