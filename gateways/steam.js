var _ = require('lodash');
var http = require('http');
var SteamApi = require('steam-api');

player = new SteamApi.Player();

gameToPlayMap = {};
tagsToGameMap = {};

player.GetOwnedGames("76561197976927510", true, true).done(function(result) {
	_map(result, function(item) {
		key = item.appId;
        	gameToPlayMap[key] = item.playtimeForever
		tagFetchResult = http.get({
		                host: 'http://steamtagchoose.apphb.com/';
		                path: 'api/SteamApp/' + key;
		        }, function(response) {
		        
			        var body = '';
				response.on('data', function(d) {
					body += d;
				});
				
				response.on('end', function() {
					var game = JSON.parse(body);
					tagsToGameMap[game.AppId] = game.Tags;
					gameToPlayMap[game.AppId].tags = game.Tags;
				});
		});
	});
});




