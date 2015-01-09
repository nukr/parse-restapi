var keyMirror = require('keymirror');
var request = require('request');

var classes = keyMirror({
    "Chats": null,
    "Comments": null,
    "Follows": null,
    "Likes": null,
    "Messages": null,
    "Orders": null,
    "Products": null,
    "users": null
});

var buildinService = keyMirror({
    "users": null,
    "roles": null,
    "files": null,
    "events": null,
    "push": null,
    "installations": null,
    "functions": null,
    "jobs": null
});

var callback = function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
    } else {
        console.log(body);
    }
};

/**
 * constructor
 *
 */
function Parse(appId, restApiKey) {
    this.parseApi = 'https://api.parse.com/1';
    this.appId = appId;
    this.restApiKey = restApiKey;
    this.options = {
        headers: {
            'X-Parse-Application-Id': this.appId,
            'X-Parse-REST-API-Key': this.restApiKey,
            'Content-Type:': 'application/json'
        }
    };
};

Parse.prototype.classes = function (className) {
    if (classes[className] === undefined) {
        return new Error('className dose not exist');
    }

    return {
        get: function () {
            console.log(className);
            console.log('i am get()');
        },

        getAll: function () {
            console.log(className);
            console.log('i am getAll()');
        },

        create: function () {
            console.log(className);
            console.log('i am create()');
        },

        del: function () {
            console.log(className);
            console.log('i am del()');
        },

        update: function () {
            console.log(className);
            console.log('i am update()');
        }

    }
};

Parse.prototype.users = function () {
    var that = this
    return {
        login: function (username, password) {
            that.options.url = that.parseApi + '/login?username=' + username + '&password=' + password
            request(that.options, callback);
        },

        requestPasswordReset: function (email) {
            options.url = this.parseApi + '/requestPasswordReset';
            options.method = 'POST';
            options.qs = {email: email};
            request(options, callback);
        }
    }
}

module.exports = Parse;
