var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  firefox = require('selenium-webdriver/firefox');
/* var o = new firefox.Options();
o.addArguments('disable-infobars'); */

var page = function () {
  this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
  var driver = this.driver;

  this.visit = function (theUrl) {
    return driver.get(theUrl);
  }

  this.quit = function () {
    return driver.quit();
  }

  this.find = function (el) {
    driver.wait(until.elementLocated(By.css(el)), 20000);
    return driver.findElement(By.css(el));
  }

  this.submit = function (el) {
    driver.wait(until.elementLocated(By.css(el)), 20000);
    return driver.findElement(By.css(el)).click();
  }

  this.write = function (el, txt) {
    return this.find(el).sendKeys(txt).then(function (child){
      driver.wait(until.elementLocated(By.css('#autocomplete-list > li:nth-child(1)')),10000).click();
    });
  }

  this.select = function (el, txt, tag) {
    driver.wait(until.elementLocated(By.css(el)), 20000).then(function (element) {
      selectByVisibleText(element, txt, tag);
    });
  }

  this.getTxt = function (el) {
   driver.wait(until.elementLocated(By.css(el)), 20000).getText()
    .then(function (textvalue){
     var txt =textvalue;
     return this.txt;
    });
  }


  this.getCurUrl = function () {
    driver.getCurrentUrl().then(function (url) {
      var URL = url;
      return this.URL;
    });
  
  }

  this.getColor = function(el)
  {
    var maxprice = driver.wait(until.elementLocated(By.css(el)), 10000).getCssValue("color")
    .then(function (color) {
      var col = color;
      return this.col;
  });
}

  function selectByVisibleText(select, textDesired, tag) {
    select.findElements(By.tagName(tag))
      .then(options => {
        options.map(option => {
          option.getText().then(text => {
            if (text == textDesired)
              option.click();
          });
        });
      });
  }
}

module.exports = page;