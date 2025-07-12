// yzhanWeather 天气效果库 - 浏览器兼容版本
const CONF = {
  sakura: {
    num: 20,
    containerStyle: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
    `,
    style: `
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 5s linear infinite;
    `,
    styles: [
      'animation-delay: .1s; animation-duration: 4s',
      'animation-delay: .5s; animation-duration: 5s',
      'animation-delay: .3s; animation-duration: 3s; animation-name: {keyframes2}',
      'animation-delay: .2s; animation-duration: 3.5s; animation-name: {keyframes1}',
      'animation-delay: .9s; animation-duration: 3s; animation-name: {keyframes1}; animation-duration: 4.5s',
      'animation-delay: .7s; animation-duration: 5.5s; animation-name: {keyframes1}',
      'animation-delay: .4s; animation-duration: 3s',
      'animation-delay: .6s; animation-duration: 4s; animation-name: {keyframes1}',
      'animation-delay: .5s; animation-duration: 5.5s; animation-name: {keyframes2};',
      'animation-delay: .3s;',
      'animation-delay: .7s; animation-duration: 3.5s',
      'animation-delay: .5s; animation-duration: 4s',
      'animation-delay: .15s; animation-duration: 6.5s; animation-name: {keyframes2};',
      'animation-delay: .5s; animation-duration: 6.5s; animation-name: {keyframes3};',
      'animation-delay: .55s; animation-duration: 5.5s; animation-name: {keyframes3};',
      'animation-delay: .75s; animation-duration: 7.5s; animation-name: {keyframes3};',
    ],
    keyframes: [
      'from { opacity: .9; } to { transform: translate(10vw, 100vh) rotateX(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-10vw, 100vh) rotateY(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(5vw, 100vh) rotateX(-45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-5vw, 100vh) rotateX(-45deg); opacity: .2; }'
    ]
  },
  snow: {
    num: 60,
    containerStyle: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
    `,
    style: `
      width: .5vw;
      height: .5vw;
      border-radius: 50%;
      background-color: white;
      border: 1px solid #fefefe;
      transform: translateY(-100%);
      animation: {keyframes0} 6s linear infinite;
    `,
    styles: [
      'animation-delay: .1s; animation-duration: 4s',
      'animation-delay: .5s; animation-duration: 5s',
      'animation-delay: .3s; animation-duration: 3s; animation-name: {keyframes2}',
      'animation-delay: .2s; animation-duration: 3.5s; animation-name: {keyframes1}',
      'animation-delay: .9s; animation-duration: 3s; animation-name: {keyframes1}; animation-duration: 4.5s',
      'animation-delay: .7s; animation-duration: 5.5s; animation-name: {keyframes1}',
      'animation-delay: .4s; animation-duration: 3s',
      'animation-delay: .6s; animation-duration: 4s; animation-name: {keyframes1}',
      'animation-delay: .5s; animation-duration: 5.5s; animation-name: {keyframes2};',
      'animation-delay: .3s;',
      'animation-delay: .7s; animation-duration: 3.5s',
      'animation-delay: .5s; animation-duration: 4s',
      'animation-delay: .15s; animation-duration: 6.5s; animation-name: {keyframes2};',
      'animation-delay: .5s; animation-duration: 6.5s; animation-name: {keyframes3};',
      'animation-delay: .55s; animation-duration: 5.5s; animation-name: {keyframes3};',
      'animation-delay: .75s; animation-duration: 7.5s; animation-name: {keyframes3};',
    ],
    keyframes: [
      'from { opacity: .9; } to { transform: translate(10vw, 100vh) rotateX(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-10vw, 100vh) rotateY(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(5vw, 100vh) rotateX(-45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-5vw, 100vh) rotateX(-45deg); opacity: .2; }'
    ]
  },
  rain: {
    num: 60,
    containerStyle: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
    `,
    style: `
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,
    styles: [
      'animation-delay: .1s; animation-duration: 4s',
      'animation-delay: .5s; animation-duration: 5s',
      'animation-delay: .3s; animation-duration: 3s; animation-name: {keyframes2}',
      'animation-delay: .2s; animation-duration: 3.5s; animation-name: {keyframes1}',
      'animation-delay: .9s; animation-duration: 3s; animation-name: {keyframes1}; animation-duration: 4.5s',
      'animation-delay: .7s; animation-duration: 5.5s; animation-name: {keyframes1}',
      'animation-delay: .4s; animation-duration: 3s',
      'animation-delay: .6s; animation-duration: 4s; animation-name: {keyframes1}',
      'animation-delay: .5s; animation-duration: 5.5s; animation-name: {keyframes2};',
      'animation-delay: .3s;',
      'animation-delay: .7s; animation-duration: 3.5s',
      'animation-delay: .5s; animation-duration: 4s',
      'animation-delay: .15s; animation-duration: 6.5s; animation-name: {keyframes2};',
      'animation-delay: .5s; animation-duration: 6.5s; animation-name: {keyframes3};',
      'animation-delay: .55s; animation-duration: 5.5s; animation-name: {keyframes3};',
      'animation-delay: .75s; animation-duration: 7.5s; animation-name: {keyframes3};',
    ],
    keyframes: [
      'from { opacity: .9; } to { transform: translate(10vw, 100vh) rotateX(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-10vw, 100vh) rotateY(45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(5vw, 100vh) rotateX(-45deg); opacity: .2; }',
      'from { opacity: .9; } to { transform: translate(-5vw, 100vh) rotateX(-45deg); opacity: .2; }'
    ]
  },
  firefly: {
    num: 60,
    containerStyle: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
    `,
    style: `
      width: .5vw;
      height: .5vw;
      border-radius: 50%;
      background-color: #fff06b;
      border: 1px solid #fff06b;
      transform: translateY(-100%);
      animation: {keyframes0} 6s linear infinite;
    `,
    styles: [
      'animation-delay: .1s; animation-duration: 4s',
      'animation-delay: .5s; animation-duration: 5s',
      'animation-delay: .3s; animation-duration: 3s; animation-name: {keyframes2}',
      'animation-delay: .2s; animation-duration: 3.5s; animation-name: {keyframes1}',
      'animation-delay: .9s; animation-duration: 3s; animation-name: {keyframes1}; animation-duration: 4.5s',
      'animation-delay: .7s; animation-duration: 5.5s; animation-name: {keyframes1}',
      'animation-delay: .4s; animation-duration: 3s',
      'animation-delay: .6s; animation-duration: 4s; animation-name: {keyframes1}',
      'animation-delay: .5s; animation-duration: 5.5s; animation-name: {keyframes2};',
      'animation-delay: .3s;',
      'animation-delay: .7s; animation-duration: 3.5s',
      'animation-delay: .5s; animation-duration: 4s',
      'animation-delay: .15s; animation-duration: 6.5s; animation-name: {keyframes2};',
      'animation-delay: .5s; animation-duration: 6.5s; animation-name: {keyframes3};',
      'animation-delay: .55s; animation-duration: 5.5s; animation-name: {keyframes3};',
      'animation-delay: .75s; animation-duration: 7.5s; animation-name: {keyframes3};',
    ],
    keyframes: [
      'from { transform: translateY(50vh) rotateZ(55deg) skew(5deg, 5deg); opacity: .1; } to { transform: translate(10vw, -100%) rotateZ(45deg); opacity: .9; }',
      'from { transform: translateY(50vh) rotateZ(-55deg) skew(5deg, 5deg); opacity: .1; } to { transform: translate(-10vw, -100%) rotateZ(-45deg); opacity: .9; }',
      'from { transform: translateY(50vh) rotateZ(155deg) skew(-5deg, 5deg); opacity: .1; } to { transform: translate(10vw, 105vh) rotateZ(145deg); opacity: .9; }',
      'from { transform: translateY(50vh) rotateZ(195deg) skew(-5deg, 5deg); opacity: .1; } to { transform: translate(-10vw, 105vh) rotateZ(185deg); opacity: .9; }',
    ]
  }
};

class YZhanWeather {
  constructor() {
    this.wrapper = document.createElement('DIV');
    document.body.appendChild(this.wrapper);
    this.styleSheet = this.wrapper.appendChild(document.createElement('STYLE')).sheet;
    this.container = this.wrapper.appendChild(document.createElement('DIV'));
  }

  uuid() {
    return 'xxxxxxxxxx'.replace(/x/g, function() { return (Math.random() * 16 | 0).toString(16); });
  }

  createRules(rules, nameFn, ruleFn) {
    if (!ruleFn) ruleFn = function(v) { return v; };
    const names = [];
    for (const rule of rules) {
      const name = 'yz' + this.uuid();
      names.push(name);
      this.styleSheet.insertRule(nameFn(name) + ' { ' + ruleFn(rule) + ' }', 0);
    }
    return names;
  }

  createRule(rule, nameFn) {
    for (const name in rule) {
      this.styleSheet.insertRule(nameFn(name) + ' { ' + rule[name] + ' }', 0);
    }
  }

  createKeyfarme(rule) {
    this.createRule(rule, function(n) { return '@keyframes ' + n; });
  }

  createKeyfarmes(rules) {
    return this.createRules(rules, function(n) { return '@keyframes ' + n; });
  }

  createStyles(rules, nameFn, keyframeNames) {
    return this.createRules(rules, nameFn, function(rule) { 
      return rule.replace(/\{keyframes(\d+)\}/g, function(match, p) { 
        return keyframeNames[p]; 
      }); 
    });
  }

  processStyles(styles, fn) {
    const n = styles.length;
    for (let i = 0; i < n; i++) {
      const g = styles[i].match(/animation-duration:(?<duration>.*)/);
      if (g === null) continue;
      fn(parseFloat(g.groups.duration), g.groups.duration, i);
    }
  }

  replaceStyles(styles, config) {
    let maxDuration = 0;
    this.processStyles(styles, function(duration) { 
      if (maxDuration < duration) maxDuration = duration; 
    });
    this.processStyles(styles, function(duration, srcDuration, i) {
      const newDuration = (duration / maxDuration) * config.maxDuration;
      const dstDuration = srcDuration.replace(duration, newDuration);
      styles[i] = styles[i].replace(srcDuration, dstDuration);
    });
  }

  load(type, config) {
    let {num, html, containerStyle, style, styles, keyframe = {}, keyframes} = CONF[type];
    this.createKeyfarme(keyframe);
    const keyframeNames = this.createKeyfarmes(keyframes);
    if (typeof style === 'string') style = { '': style };  
    this.createStyles([style['']], function(n) { return '.' + (this.container.className = n) + ' div'; }.bind(this), keyframeNames);
    const className = this.container.className;
    this.createStyles([containerStyle], function() { return '.' + className; }, keyframeNames);
    this.createRule(style, function(n) { return '.' + this.container.className + ' div' + (n[0] === ':' ? '' : ' ') + n; }.bind(this));
    this.replaceStyles(styles, config);
    const classNames = this.createStyles(styles, function(n) { return ' .' + this.container.className + ' .' + n; }.bind(this), keyframeNames);
    const fragement = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
      const div = document.createElement('DIV');
      if (html) div.innerHTML = html;
      fragement.appendChild(div).className = classNames[i % classNames.length];
    }
    this.container.appendChild(fragement);
  }

  run(type, config) {
    if (!config) config = { maxDuration: 10 };
    this.clear();
    this.load(type, config);
  }

  clear() {
    this.container.innerHTML = '';
    while (this.styleSheet.cssRules.length) this.styleSheet.deleteRule(0);
  }

  destory() {
    this.wrapper.remove();
    this.wrapper = this.styleSheet = this.container = null;
  }
}

// 导出到全局
window.YZhanWeather = YZhanWeather; 