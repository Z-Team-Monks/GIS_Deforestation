<template>
  <v-container style="width: 500px">
    <v-card >
      <div
        id="give-form-442-wrap"
        class="give-form-wrap give-display-onpage snipcss-ThR5k"
      >
        <h2 class="give-form-title">Donate Now</h2>
        <div
          id="give-form-content-442"
          class="give-form-content-wrap give_pre_form-content"
        >
          <div class="main-heading">
            <h3 class="tt-title font25">
              You are donating to :
              <span> {{name}} </span>
            </h3>
          </div>
          <h4 class="tt-featured-title font15">
            how much would you like to donate ?
          </h4>
        </div>
        <form
        
          id="give-form-442-1"
          class="give-form give-form-442 give-form-type-multi"
        >
          <div class="give-total-wrap">
            <div class="give-donation-amount form-row-wide">
              <span class="give-currency-symbol give-currency-position-before">
                $
              </span>
              <label class="give-hidden" for="give-amount">
                Donation Amount:
              </label>
              <input
                class="give-text-input give-amount-top"
                id="give-amount"
                ref="amount"
                name="give-amount"
                type="text"
                inputmode="decimal"
                placeholder=""
                :value="money"
                autocomplete="off"
              />
            </div>
          </div>
          <ul
            id="give-donation-level-button-wrap"
            class="give-donation-levels-wrap give-list-inline"
          >
            <li>
              <button
                v-on:click="money='10'"
                type="button"
                data-price-id="0"
                class="give-donation-level-btn give-btn give-btn-level-0"
                value="10"
                data-default="0"
              >
                $10
              </button>
            </li>
            <li>
              <button
                v-on:click="money='20'"
                type="button"
                data-price-id="1"
                class="give-donation-level-btn give-btn give-btn-level-1 "
                value="20"
                data-default="1"
              >
                $20
              </button>
            </li>
            <li>
              <button
                v-on:click="money='30'"
                type="button"
                data-price-id="2"
                class="give-donation-level-btn give-btn give-btn-level-2"
                value="30"
                data-default="0"
              >
                $30
              </button>
            </li>
            <li>
              <button
                v-on:click="money='40'"
                type="button"
                data-price-id="3"
                class="give-donation-level-btn give-btn give-btn-level-3"
                value="40"
                data-default="0"
              >
                $40
              </button>
            </li>
            <li>
              <button
                v-on:click="money=''"
                type="button"
                data-price-id="custom"
                class="give-donation-level-btn give-btn give-btn-level-custom"
                value="custom"
              >
                Your Amount(USD)
              </button>
            </li>
          </ul>

          <div id="give_purchase_form_wrap">
            <fieldset id="give_purchase_submit" class="give-donation-submit">
              <p id="give-final-total-wrap" class="form-wrap">
                <span class="give-donation-total-label"> Donation Total: </span>
                <span class="give-final-total-amount" data-total="10">
                  {{fundraised}}
                </span>
              </p>
              <div class="give-submit-button-wrap give-clearfix">
                <button
                  @click="donateMoney_"
                  class="give-submit give-btn"
                  id="give-purchase-button"
                  name="give-purchase"
                  data-before-validation-label="Donate Now"
                >Donate Now</button>
                <span class="give-loading-animation"> </span>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import {donateMoney} from "../store/index";

export default {
    props: ["id", "name", "fundraised"],
    data () {
        return {
            money: 0,
            forrestId: this.id,
            title: this.name,
        }
    },
    methods: {
        donateMoney_() {
            const payload = {
              amount: this.money,
              forestId: this.forrestId
          }
          console.log(this.fundraised)
          console.log(payload)
        let ret = donateMoney(payload)

        if (ret) {
            this.fundraised = parseInt(this.fundraised) + parseInt(payload.amount)
            this.money = 0
            alert("Transaction Success")
        } else {
            alert("Transaction Failed")
        }
        }
    }
}
</script>


<style scoped>
@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  src: url(https://fonts.gstatic.com/s/opensans/v27/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  src: url(https://fonts.gstatic.com/s/opensans/v27/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  src: url(https://fonts.gstatic.com/s/opensans/v27/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: give-icomoon;
  src: url(https://www.themechampion.com/demo/envitwp/wp-content/themes/envit/assets/assets/fonts/icomoon.eot?kdnr3d);
  src: url(https://www.themechampion.com/demo/envitwp/wp-content/themes/envit/assets/assets/fonts/icomoon.eot?kdnr3d#iefix)
      format("embedded-opentype"),
    url(https://www.themechampion.com/demo/envitwp/wp-content/themes/envit/assets/assets/fonts/icomoon.woff?kdnr3d)
      format("woff"),
    url(https://www.themechampion.com/demo/envitwp/wp-content/themes/envit/assets/assets/fonts/icomoon.svg?kdnr3d#icomoon)
      format("svg");
  font-weight: 400;
  font-style: normal;
}
@media all {
  * {
    box-sizing: border-box;
  }
  .wpb_text_column :last-child {
    margin-bottom: 0;
  }
  .wpb_content_element {
    margin-bottom: 35px;
  }
}
.vc_custom_1507112982252 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
@media all {
  .vc_column_container > .vc_column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
}
@media (min-width: 992px) {
  .col-md-offset-1 {
    margin-left: 8.33333%;
  }
}
@media all {
  .donatepage {
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 100px;
  }
  .vc_column_container {
    width: 100%;
  }
  .vc_col-sm-10 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
}
@media (min-width: 768px) {
  .vc_col-sm-10 {
    float: left;
    width: 83.3333%;
  }
}
@media all {
  .vc_column_container {
    padding-left: 0;
    padding-right: 0;
  }
  .cellpadding {
    padding: 100px 0;
  }
  .vc_row {
    margin-left: -15px;
    margin-right: -15px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media all {
  .mainPadding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media (min-width: 1300px) {
  .container {
    width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
.mainPadding {
  padding-top: 0;
  padding-bottom: 0;
}
@media all {
  body {
    --extendify--spacing--large: var(
      --wp--custom--spacing--large,
      clamp(2em, 8vw, 8em)
    );
    --extendify--spacing--large: var(
      --wp--custom--spacing--large,
      clamp(2em, 8vw, 8em)
    );
    margin: 0;
    font-size: 14px;
    line-height: 1.42857;
    background-color: #fff;
    color: #898989;
    font-family: "Open Sans", sans-serif;
  }
}
body,
h2,
h3,
h4,
p {
  font-display: swap;
}
@media all {
  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
    font-size: 10px;
  }
  :after,
  :before {
    box-sizing: border-box;
  }
  h2 {
    font-weight: 500;
    line-height: 1.1;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 30px;
    color: #242424;
  }
}
@media all {
  h2.give-form-title {
    display: none;
  }
  [id*="give-form"] .give-form-title {
    margin: 0 0 15px;
  }
  [id*="give-form"] div.give-form-content-wrap {
    margin: 0 0 20px;
  }
  form.give-form,
  form[id*="give-form"] {
    margin: 0 0 25px;
    padding: 0;
  }
  .give-form.give-form-442.give-form-type-multi {
    padding: 0 50px 50px;
  }
  .main-heading {
    background: #6ab43e;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: #6ab43e;
    padding: 40px 0;
  }
  h4 {
    font-weight: 500;
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #242424;
  }
}
@media all {
  .tt-featured-title {
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  .font15 {
    font-size: 15px;
  }
  .tt-featured-title {
    color: #898989;
    margin-top: 40px;
    padding: 0 50px;
    margin-bottom: 30px !important;
  }
  [id*="give-form"] .give-hidden,
  form.give-form .give-hidden,
  form[id*="give-form"] .give-hidden {
    display: none;
  }
  input {
    margin: 0;
    line-height: normal;
  }
  h3,
  ul {
    margin-bottom: 10px;
  }
  #give-donation-level-button-wrap,
  ul {
    list-style-position: initial;
    list-style-image: initial;
  }
  ul {
    margin-top: 0;
    list-style: disc;
    list-style-type: disc;
    padding-left: 20px;
  }
  #give-donation-level-button-wrap {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    clear: both;
    list-style-type: none;
  }
  #give-donation-level-button-wrap:after,
  #give-donation-level-button-wrap:before {
    content: " ";
    display: table;
  }
  #give-donation-level-button-wrap:after {
    clear: both;
  }
  fieldset {
    min-width: 0;
  }
  [id*="give-form"] fieldset,
  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }
  h3 {
    font-weight: 500;
    line-height: 1.1;
    margin-top: 20px;
    font-size: 24px;
    color: #242424;
  }
}
@media all {
  .tt-title {
    color: #242424;
    font-size: 30px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    margin-top: 0;
    text-transform: uppercase;
  }
  .font25 {
    font-size: 25px !important;
  }
  .main-heading .tt-title {
    color: #fff;
    margin-bottom: 0;
    letter-spacing: 0.6px;
    padding-left: 50px;
    padding-right: 50px;
  }
  p {
    margin: 0 0 10px;
    line-height: 26px;
  }
}
@media all {
  .wpb_text_column :last-child,
  p:last-child {
    margin-bottom: 0;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  form.give-form .form-row-wide,
  form[id*="give-form"] .form-row-wide {
    clear: both;
  }
  form[id*="give-form"] .give-donation-amount {
    margin: 0 0 15px;
  }
  .form-row-wide:after,
  .form-row-wide:before,
  form.give-form .form-row-wide:after,
  form.give-form .form-row-wide:before,
  form[id*="give-form"] #give-gateway-radio-list:after,
  form[id*="give-form"] #give-gateway-radio-list:before,
  form[id*="give-form"] .form-row-wide:after,
  form[id*="give-form"] .form-row-wide:before {
    content: " ";
    display: table;
  }
  .form-row-wide:after,
  form.give-form .form-row-wide:after,
  form[id*="give-form"] #give-gateway-radio-list:after,
  form[id*="give-form"] .form-row-wide:after {
    clear: both;
  }
  #give-donation-level-button-wrap > li {
    list-style-type: none;
    list-style-image: none;
    float: left;
    margin: 0 5px 5px 0;
  }
  .give-btn,
  button.give-donation-level-btn.give-btn,
  form[id*="give-form"] .give-donation-amount #give-amount,
  legend {
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }
  legend {
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 21px;
    color: #333;
    border-style: initial;
    border-color: initial;
    border-width: 0 0 1px;
    border-bottom-style: solid;
    border-bottom-color: #e5e5e5;
  }
  legend.give-payment-mode-label {
    padding-top: 25px !important;
  }
  form.give-form legend,
  form[id*="give-form"] legend {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.15em;
    font-weight: 700;
    margin: 10px 0 15px;
    padding: 0 0 5px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  fieldset#give_checkout_user_info {
    margin-top: 25px;
  }
  .main-heading .tt-title span {
    text-transform: initial;
    font-weight: 500;
  }
  form[id*="give-form"] .give-donation-amount .give-currency-symbol {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #f2f2f2;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #ccc;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ccc;
    color: #333;
    margin: 0;
    padding: 0 12px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    box-sizing: border-box;
    float: left;
  }
  form[id*="give-form"]
    .give-donation-amount
    .give-currency-symbol.give-currency-position-before {
    border-left: 1px solid #ccc;
    border-right: none;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #ccc;
    border-right-width: initial;
    border-right-style: none;
    border-right-color: initial;
  }
  form[id*="give-form"] .give-donation-amount input.give-amount-top {
    width: 125px;
  }
  .give-btn,
  button.give-donation-level-btn.give-btn,
  form[id*="give-form"] .give-donation-amount #give-amount {
    border-style: solid;
  }
  form[id*="give-form"] .give-donation-amount #give-amount {
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 0;
    border-width: 1px;
    border-color: #ccc;
    background-color: #fff;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    height: 35px;
    line-height: 35px;
    padding: 0 12px;
    margin: 0;
    font-size: 18px;
    box-sizing: border-box;
    min-width: 125px;
    float: left;
  }
  button {
    margin: 0;
    overflow: visible;
    overflow-x: visible;
    overflow-y: visible;
    text-transform: none;
    appearance: button;
    cursor: pointer;
  }
  .give-btn,
  button.give-donation-level-btn.give-btn {
    cursor: pointer;
  }
  .give-btn {
    background: #ededed;
    border: 1px solid #ccc;
    background-color: #ededed;
    border-width: 1px;
    border-color: #ccc;
    color: #333;
    padding: 8px 10px;
    line-height: 1.2em;
    font-size: 1em;
  }
  button.give-donation-level-btn.give-btn {
    border: 2px solid #e3e3e3;
    border-radius: 0;
    background: #fff;
    transition: all 500ms ease;
    display: block;
    line-height: 22px;
    padding: 10px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    color: #898989;
    border-width: 2px;
    border-color: #e3e3e3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #fff;
    transition-duration: 500ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
  }
  .give-btn,
  .give-btn:hover,
  button.give-donation-level-btn.give-btn,
  button.give-donation-level-btn.give-btn.give-default-level,
  form[id*="give-form"] .give-donation-amount #give-amount {
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
  }
  button.give-donation-level-btn.give-btn.give-default-level {
    background: #6ab43e;
    background-color: #6ab43e;
    border-color: #6ab43e;
    color: #fff;
  }
  .give-btn:hover {
    background: #dbdbdb;
    background-color: #dbdbdb;
  }
  form[id*="give-form"] span.give-loading-text {
    display: none;
    float: right;
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    font-style: italic;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
  }
  form[id*="give-form"] .give-payment-mode-label .give-loading-text {
    float: right;
  }
  form[id*="give-form"] #give-gateway-radio-list {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
  }
  form.give-form .form-row,
  form[id*="give-form"] .form-row {
    overflow: visible;
    box-sizing: border-box;
    margin: 0 0 15px;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0;
  }
  form.give-form .form-row-first {
    float: left;
    width: 48.5%;
  }
  form.give-form .form-row-last {
    width: 48.5%;
  }
  form[id*="give-form"] .form-row-first {
    float: left;
    width: 48.5%;
  }
  form[id*="give-form"] .form-row-last {
    width: 48.5%;
  }
  .form-row:after,
  .form-row:before,
  form.give-form .form-row:after,
  form.give-form .form-row:before,
  form[id*="give-form"] #give-final-total-wrap:after,
  form[id*="give-form"] #give-final-total-wrap:before,
  form[id*="give-form"] .form-row:after,
  form[id*="give-form"] .form-row:before {
    content: " ";
    display: table;
  }
  .form-row:after,
  form.give-form .form-row:after,
  form[id*="give-form"] #give-final-total-wrap:after,
  form[id*="give-form"] .form-row:after {
    clear: both;
  }
  form.give-form .form-row-last,
  form[id*="give-form"] .form-row-last {
    float: right;
  }
  form.give-form .form-row:last-child,
  form[id*="give-form"] .form-row:last-child {
    margin-bottom: 15px;
  }
  form[id*="give-form"] #give-final-total-wrap {
    margin: 10px 0 25px;
    padding: 0;
  }
  .give-clearfix:after,
  .give-clearfix:before {
    content: " ";
    display: table;
  }
  .give-clearfix:after {
    clear: both;
  }
  form[id*="give-form"] .give-loading-animation {
    animation: spin 1s infinite linear;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: spin;
    font-variant: normal;
    font-family: give-icomoon;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    text-transform: none;
    background-repeat: no-repeat;
    speak: none;
    font-style: normal;
    font-weight: 400;
    float: left;
    height: 16px;
    width: 16px;
    line-height: 1;
    font-size: 16px;
    margin: 0 5px 0 0;
    background-size: 20px 20px;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-color: transparent;
  }
  .give-icon-spinner2:before,
  form[id*="give-form"] .give-loading-animation:before {
    content: "";
  }
  form[id*="give-form"] #give-gateway-radio-list > li {
    list-style-type: none;
    list-style-image: none;
    margin: 0;
    padding: 0;
  }
}
@media (min-width: 480px) {
  form[id*="give-form"] #give-gateway-radio-list > li {
    display: inline-block;
    margin-right: 15px;
    margin-left: 0;
  }
}
@media all {
  label.give-label,
  span.give-donation-total-label {
    color: #898989;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 15px !important;
  }
  form.give-form .form-row label,
  form[id*="give-form"] .form-row label {
    display: block;
    margin: 0 0 5px;
    position: relative;
    line-height: 1.7;
  }
  input.give-input {
    border-radius: 0;
    border: 2px solid #e3e3e3 !important;
    box-shadow: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 20px;
    color: #959595;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    padding-left: 22px;
    height: 42px;
    border-width: 2px !important;
    border-style: solid !important;
    border-color: #e3e3e3 !important;
    border-image-source: initial !important;
    border-image-slice: initial !important;
    border-image-width: initial !important;
    border-image-outset: initial !important;
    border-image-repeat: initial !important;
  }
  form.give-form .form-row input[type="email"],
  form.give-form .form-row input[type="text"],
  form[id*="give-form"] #give-final-total-wrap .give-donation-total-label,
  form[id*="give-form"] .form-row input[type="email"],
  form[id*="give-form"] .form-row input[type="text"] {
    border: 1px solid #ccc;
    color: #333;
    margin: 0;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }
  form.give-form .form-row input[type="email"],
  form.give-form .form-row input[type="text"],
  form[id*="give-form"] .form-row input[type="email"],
  form[id*="give-form"] .form-row input[type="text"] {
    border-radius: 0;
    outline: 0;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    outline-color: initial;
    outline-style: initial;
    outline-width: 0;
    background-color: #fdfdfd;
    padding: 0.5em;
  }
  form.give-form .form-row input[type="email"].required,
  form.give-form .form-row input[type="text"].required,
  form[id*="give-form"] .form-row input[type="email"].required,
  form[id*="give-form"] .form-row input[type="text"].required {
    color: #333;
  }
  span.give-donation-total-label {
    color: #898989 !important;
    font-size: 14px !important;
  }
  form[id*="give-form"] #give-final-total-wrap .give-donation-total-label {
    background-color: #f2f2f2;
    padding: 0 12px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    float: left;
  }
  .give-submit-button-wrap .give-submit,
  form[id*="give-form"] #give-final-total-wrap .give-final-total-amount,
  input[type="submit"] {
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
  }
  form[id*="give-form"] #give-final-total-wrap .give-final-total-amount {
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 0;
    border-left: none;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-top-color: #ccc;
    border-right-color: #ccc;
    border-bottom-color: #ccc;
    background-color: #fff;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    height: 35px;
    line-height: 35px;
    padding: 0 12px;
    margin: 0;
    font-size: 18px;
    box-sizing: border-box;
    border-left-width: initial;
    border-style: solid solid solid none;
    border-left-color: initial;
    float: left;
  }
  .give-submit-button-wrap .give-submit,
  input[type="submit"] {
    background: #6ab43e;
    color: #fff;
    background-color: #6ab43e;
  }
  form[id*="give-form"] #give-final-total-wrap .give-final-total-amount,
  input[type="submit"] {
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }
  input[type="submit"] {
    appearance: button;
    cursor: pointer;
    border: 0;
    padding: 3px 20px;
    border-width: 0;
    border-style: initial;
    border-color: initial;
  }
  .give-submit-button-wrap .give-submit {
    border-radius: 0;
    overflow: hidden;
    transition: color 0.3s ease-in-out;
    display: inline-block;
    position: relative;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    transform: translateZ(0);
    backface-visibility: hidden;
    padding: 15px 32px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    vertical-align: middle;
    overflow-x: hidden;
    overflow-y: hidden;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: color;
    z-index: 2;
    float: left;
  }
  .give-submit-button-wrap span.give-loading-animation {
    margin: 0 0 0 0.5em;
    display: none;
  }
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    margin: 4px 0 0;
    line-height: normal;
  }
  form[id*="give-form"] input[type="radio"] {
    margin: 0 0.5em 0 0;
  }
  form[id*="give-form"] #give-gateway-radio-list > li input[type="radio"] {
    outline: 0;
    margin: 0 0.25em 0 0;
    outline-color: initial;
    outline-style: initial;
    outline-width: 0;
    width: auto;
    display: inline;
  }
  form[id*="give-form"]
    #give-gateway-radio-list
    > li
    label.give-gateway-option {
    cursor: pointer;
    display: inline;
    margin: 0;
  }
  form.give-form .give-required-indicator,
  form[id*="give-form"] .give-required-indicator {
    color: #a00;
  }
  form.give-form .give-tooltip,
  form[id*="give-form"] .give-tooltip {
    transition: 0.2s all linear;
    margin: 0 3px;
    padding: 0;
    font-size: 14px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
    transition-property: all;
    color: rgba(51, 51, 51, 0.5);
  }
  .give-tooltip:hover,
  form[id*="give-form"] .give-tooltip:hover {
    color: #333;
  }
  [class*=" give-icon-"] {
    font-variant: normal;
    font-family: give-icomoon;
    font-style: normal;
    font-weight: 400;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    text-transform: none;
    line-height: 1;
    speak: none;
  }
  .give-icon-question:before {
    content: "";
  }
}
</style>
