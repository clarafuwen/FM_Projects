("use strict");

const rootElement = document.getElementById("orderSummaryComponent");

const ratePlan = (
  <div className="ratePlan__wrapper">
    <div className="ratePlan__name">Annual Plan</div>
    <div className="ratePlan__rate">$59.99/year</div>
  </div>
);

const link_changePlan = (
  <a className="ratePlan__link" href="#">
    Change
  </a>
);

const ratePlan_container = (
  <div className="ratePlan">
    <img src="images/icon-music.svg" />
    {ratePlan}
    {link_changePlan}
  </div>
);
const btn_proceed = (
  <button className="btn btn__proceed">Proceed to Payment</button>
);
const btn_cancel = <button className="btn btn__cancel">Cancel Order</button>;

const main = (
  <main className="margin_inline main">
    <img className="main__hero" src="/images/illustration-hero.svg" />
    <h1 className="main__heading">Order Summary</h1>
    <p className="main__description">
      You can now listen to millions of songs, audiobooks, and podcasts on any
      device anywhere you like!
    </p>
    {ratePlan_container}
    {btn_proceed}
    {btn_cancel}
  </main>
);
const body = <>{main}</>;
ReactDOM.render(body, rootElement);
