import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";

@connectTo((store) => store.state.pipe(pluck("cards")))
export class CardList {

}
