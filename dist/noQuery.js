class noQuery {
  static init() {
    window.$ = document.querySelectorAll.bind(document) || document.querySelector.bind(document);
    window.$_ = document.createElement.bind(document);
    Node.prototype.on = window.on = function(name, fn) {
      this.addEventListener(name, fn);
    };
    Node.prototype.click = function(fn) {
      this.addEventListener("click", fn);
    };
    Node.prototype.text = function(text) {
      if (!text)
        return this.textContent;
      return this.textContent += text;
    };
    Node.prototype.html = function(html) {
      if (!html)
        return this.innerHTML;
      return this.innerHTML = html;
    };
    Node.prototype.append = function(child) {
      return this.appendChild(child);
    };
    Node.prototype.css = function(prop, value) {
      let p = prop.replace(/(?:^\w|[A-Z]|\b\w)/g, (str, i) => {
        return i == 0 ? str.toLowerCase() : str.toUpperCase();
      }).replace("-", "");
      this.style[p] = value;
    };
    Node.prototype.hide = function() {
      this.css("display", "none");
    };
    Node.prototype.fadeOut = function() {
      this.css("opacity", "1");
      this.css("transition", "opacity 0.2s ease-in-out");
      this.css("opacity", "0");
    };
    Node.prototype.fadeIn = function() {
      this.css("opacity", "0");
      this.css("transition", "opacity 0.2s ease-in-out");
      this.css("opacity", "1");
    };
    Node.prototype.font = function(value) {
      this.style.fontFamily = value;
    };
    Node.prototype.toggle = function(toggle = false) {
      toggle = !toggle;
      if (toggle)
        this.css("display", "none");
      else if (!toggle)
        this.css("display", "block");
      console.log(toggle);
    };
    Node.prototype.slideDown = function() {
      this.css("max-height", "0");
      this.css("transition", "max-height 0.2s ease-in-out");
      this.css("max-height", "100px");
    };
    Node.prototype.attr = function(attr, value) {
      let e = document.getElementById(this.id);
      if (!attr)
        throw new Error("You did not specify an attribute.");
      if (!value)
        return e.getAttribute(attr);
      else
        return e.setAttribute(attr, value);
    };
    Node.prototype.height = function() {
      return this.offsetHeight;
    };
    Node.prototype.width = function() {
      return this.offsetWidth;
    };
    Node.prototype.hover = function(fn1, fn2) {
      this.addEventListener("mouseenter", fn1);
      this.addEventListener("mouseleave", fn2);
    };
    NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
      this.forEach((elem) => elem.on(name, fn));
    };
    NodeList.prototype.each = function(fn) {
      return [...this].forEach(fn);
    };
    NodeList.prototype.append = function(child) {
      this.forEach((i) => i.append(child));
    };
    NodeList.prototype.html = function(html) {
      this.each((item) => item.html(html));
    };
    NodeList.prototype.text = function(text) {
      this.forEach((i) => !text ? i.textContent : i.textContent = text);
    };
    NodeList.prototype.css = function(prop, value) {
      let p = prop.replace(/(?:^\w|[A-Z]|\b\w)/g, (str, i) => {
        return i == 0 ? str.toLowerCase() : str.toUpperCase();
      }).replace("-", "");
      this.each((item) => {
        item.style[p] = value;
      });
    };
    NodeList.prototype.hide = function() {
      this.each((i) => i.css("display", "none"));
    };
    NodeList.prototype.click = function(fn) {
      this.each((i) => {
        i.addEventListener("click", fn);
      });
    };
    NodeList.prototype.fadeOut = function() {
      this.each((i) => {
        i.css("opacity", "1");
        i.css("transition", "opacity 0.2s ease-in-out");
        i.css("opacity", "0");
      });
    };
    NodeList.prototype.fadeIn = function() {
      this.each((i) => {
        i.css("opacity", "0");
        i.css("transition", "opacity 0.2s ease-in-out");
        i.css("opacity", "1");
      });
    };
    NodeList.prototype.toggle = function() {
      let toggle;
      this.each((i) => {
        if (toggle)
          toggle = false;
        else if (!toggle)
          toggle = true;
        toggle ? i.css("display", "none") : i.css("display", "block");
      });
      console.log(toggle);
    };
    NodeList.prototype.slideDown = function() {
      this.each((i) => {
        i.css("max-height", "0");
        i.css("transition", "max-height 0.2s ease-in-out");
        i.css("max-height", "100px");
      });
    };
    NodeList.prototype.attr = function(attr, value) {
      let a;
      this.each((i) => {
        let e = document.getElementById(i.id);
        if (!attr)
          throw new Error("You did not specify an attribute or value");
        if (!value)
          a = e.getAttribute(attr);
        else
          e.setAttribute(attr, value);
      });
      return a;
    };
    NodeList.prototype.height = function() {
      let h;
      this.each((i) => h = i.offsetHeight);
      return h;
    };
    NodeList.prototype.width = function() {
      let w;
      this.each((i) => w = i.offsetWidth);
      return w;
    };
    NodeList.prototype.first = function() {
      return this[0];
    };
    NodeList.prototype.last = function() {
      return this[this.length - 1];
    };
    NodeList.prototype.mouseenter = function(fn) {
      this.each((i) => i.addEventListener("mouseenter", fn));
    };
    NodeList.prototype.mouseleave = function(fn) {
      this.each((i) => i.addEventListener("mouseleave", fn));
    };
    NodeList.prototype.mousedown = function(fn) {
      this.each((i) => i.addEventListener("mousedown", fn));
    };
    NodeList.prototype.mouseup = function(fn) {
      this.each((i) => i.addEventListener("mouseup", fn));
    };
    NodeList.prototype.hover = function(fn1, fn2) {
      this.each((i) => {
        i.addEventListener("mouseenter", fn1);
        i.addEventListener("mouseleave", fn2);
      });
    };
    Array.prototype.each = function(fn) {
      this.forEach(fn);
    };
    Array.prototype.sum = function() {
      let res = 0;
      for (let i = 0; i < this.length; i++) {
        res += this[i];
      }
      return res;
    };
    Array.prototype.avg = function() {
      let res = 0;
      for (let i = 0; i < this.length; i++) {
        res += this[i];
      }
      return res / this.length;
    };
  }
  static traveral() {
    window.$ = document.querySelectorAll.bind(document) || document.querySelector.bind(document);
  }
}
export default noQuery;
//# sourceMappingURL=noQuery.js.map
