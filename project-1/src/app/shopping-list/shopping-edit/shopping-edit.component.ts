import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Models
import { Ingredient } from 'src/app/shared/ingredient.model';

// Services
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(): void {
    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameInput, amountInput);

    this.shoppingListService.addIngredient(newIngredient);
  }

}
