console.log("-------Event Listeners------");

function CookieStore(storeName, minCust, maxCust, avgCookies) {
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
}

const submitbuttonEl = document.getElementById("new-store-form");
console.log(submitbuttonEl);

submitbuttonEl.addEventListener("submit", function (event) {
    event.preventDefault();
    // stops automatic refresh of form/page once form submitted.

    const storeNameInput = event.target.name.value;
    // looking for values and setting these variables to match what the values are.
    console.log(storeNameInput);
    const minCustInput = event.target.minCust.value;
    console.log(minCustInput);
    const maxCustInput = event.target.maxCust.value;
    console.log(maxCustInput);
    const avgCookiesInput = event.target.avgCookies.value;
    console.log(avgCookiesInput);

    console.log(event.target);

    const newStore = new CookieStore(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);
    // grabs all input values and puts them in the constructor function parameters.
    console.log(newStore);

    myStores.push(newStore);
    console.log(myStores);
});
// event.target is the form because the event listener is in the form.
