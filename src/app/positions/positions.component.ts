import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Position } from './Position';
import { PositionService } from './position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  positions?: Position[];
  selection = new SelectionModel<Position>(true);
  displayedColumns = ["select", "name", "numberOfWorkers", "numberOfVacancy"];

  constructor(
    private positionService: PositionService,
  ) { }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions() {
    this.positionService.getPositions().subscribe(positions => {
      this.positions = positions;
    });
  }

  toggleAllRows() {
    if (!this.positions)
      return;
  
    if (this.selection.selected.length < this.positions.length)
      this.selection.select(...this.positions);
    else
      this.selection.clear()
  }

  isAllSelected() {
    return true;
  }
}
