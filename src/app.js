const openStream = require('./openStream');

const $ = require('jquery');

// openStream();

const Peer = require('simple-peer');

const p = new Peer({
	initiator: location.hash === '#1', trickle: false
});

p.on('signal', token => {
	$('#taMySignal').val(JSON.stringify(token));
});

p.on('connect', () => {
	setInterval(() => {
		p.send(Math.random()),
		2000
	});
});

p.on('data', data => {
	console.log('Nhan data : '+ data);
})

$('#btnConnect').click(() => {
	const friendSignal = JSON.parse($('#txtFriendSignal').val());
	p.signal(friendSignal);
});

console.log('Hello!!!!');