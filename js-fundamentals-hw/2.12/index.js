'use strict';

let user;
alert(user ?? 'Anonymous');

let secondUser = 'John';

alert(secondUser ?? 'Anonymous');

let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

alert(firstName ?? lastName ?? nickName ?? 'Anonymous');
