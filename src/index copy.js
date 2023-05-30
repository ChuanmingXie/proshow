import _ from 'lodash';
import './style.css';
import github from '../imgs/home/github.png';
import data from './data/data.xml';
import notes from './data/data.csv';
import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', '我是汉字'], ' ');
  element.classList.add('hello');
  const mypng = new Image();
  mypng.src = github;
  element.appendChild(mypng);

  console.log(data);
  console.log(notes);

  console.log(toml.title); // output `TOML Example`
  console.log(toml.owner.name); // output `Tom Preston-Werner`

  console.log(yaml.title); // output `YAML Example`
  console.log(yaml.owner.name); // output `Tom Preston-Werner`

  console.log(json.title); // output `JSON5 Example`
  console.log(json.owner.name); // output `Tom Preston-Werner`

  return element;
}

document.body.appendChild(component());