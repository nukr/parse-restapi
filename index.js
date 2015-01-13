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

    var that = this;

    return {
        get: function (objectId, callback) {
            that.options.url = that.parseApi + '/classes/' + className + '/' + objectId;
            request(that.options, callback)
        },

        getAll: function (callback) {
            that.options.url = that.parseApi + '/classes/' + className;
            request(that.options, callback)
        },

        getProduct: function (objectId, callback) {
          that.options.url =
            that.parseApi +
            '/classes/' +
            className +
            '/' +
            objectId +
            '?include=seller';
          request(that.options, callback);
        },

        getLike: function (callback) {
          that.options.url = that.parseApi + '/classes/' + className + '?include=likedUser';
          request(that.options, callback);
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
        login: function (userData, callback) {
            that.options.url = that.parseApi + '/login?username=' + userData.username + '&password=' + userData.password
            request(that.options, callback);
        },

        requestPasswordReset: function (email, callback) {
            that.options.url = that.parseApi + '/requestPasswordReset';
            that.options.method = 'POST';
            that.options.qs = {email: email};
            request(that.options, callback);
        },

        create: function (userData, callback) {
            that.options.method = 'POST';
            that.options.url = that.parseApi + '/users';
            that.options.qs = userData;
            request(that.options, callback);
        },

        get: function (objectId, callback) {
            that.options.url = that.parseApi + '/users/' + objectId;
            request(that.options, callback);
        },

        verify: function (sessToken, callback) {
            that.options.url = that.parseApi + '/users/me'
            that.options.headers['X-Parse-Session-Token'] = sessToken;
            request(that.options, callback);
        },

        getAll: function (callback) {
            that.options.url = that.parseApi + '/users';
            request(that.options, callback);
        },

        update: function (userData, callback) {
            that.options.method = 'PUT';
            that.options.url = that.parseApi + '/users/' + userData.objectId;
            that.options.qs = userData;
            that.options.headers['X-Parse-Session-Token'] = sessToken;
            request(that.options, callback);
        },

        del: function (userData, callback) {
            that.options.method = 'DELETE';
            that.options.url = that.parseApi + '/users/' + objectId;
            that.options.headers['X-Parse-Session-Token'] = sessToken;
            request(that.options, callback);
        }
    }
}

module.exports = Parse;
