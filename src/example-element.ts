import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import Fetcher from "@supersoniks/concorde/core/mixins/Fetcher";
import Subscriber from "@supersoniks/concorde/core/mixins/Subscriber";
import tailwind from "./tailwind";

/**
 * Exemple d'implémentation de fetcher pour afficher des données venant d'un service
 * l'url du service est configurées dans index.html mais pourrait être inscrite ici via la propriété dataProvider
 */

const dataType = {
  email: "example@mail.com",
  first_name: "sonic",
  last_name: "super",
};

@customElement("example-element")
export class ExempleElement extends Fetcher(Subscriber(LitElement, dataType)) {
  static styles = [tailwind];
  @property() email = "";
  @property() first_name = "";
  @property() last_name = "";

  render() {
    return html`<div>
      <div class="text-xl font-bold">
        Affichage a l'aide des propriétés déclarées via @property
      </div>
      <div>${this.first_name} ${this.last_name} : ${this.email}</div>
      <hr class="my-8 opacity-25" />
      <div class="text-xl font-bold">
        Affichage par dataBinding sans déclaration de proriété
      </div>
      <div data-bind ::inner-html="$first_name $last_name : $email"></div>
      <hr class="my-8 opacity-25" />
      <div class="text-xl font-bold">
        Affichage via la propriété props de tout subscriber
      </div>
      <div>
        ${this.props?.first_name} ${this.props?.last_name} :
        ${this.props?.email}
      </div>
    </div>`;
  }
}
