var app = angular.module('redditClone', []);

app.controller('MainController', function($scope) {
	
	$scope.view = {};
	$scope.view.showForm = false;

	$scope.form = function() {
		if ($scope.view.showForm === false) {
			$scope.view.showForm = true;
		}
		else {
			$scope.view.showForm = false;
		}
	};
		
	$scope.submitPost = function() {
			var newPost = {
				title: $scope.view.title,
				author: $scope.view.author,
				imageUrl: $scope.view.imageUrl,
				description: $scope.view.description,
				votes: 0,
				date: Date.now(),
				comments: [],
				showComments: false
			}

			$scope.posts.push(newPost);

			$scope.view.showForm = false;

			$scope.view.title = '';
			$scope.view.author = '';
			$scope.view.imageUrl = '';
			$scope.view.description = '';
	};

	

	$scope.posts = [{image: "http://lorempixel.com/400/200", author: 'Hamlet', title: "SoMa", description: 'great place', votes: 0, date: Date.now(), comments: ['bla'], showComments: false}];
	
	$scope.voteStyle = {};







	$scope.voteUp = function(post) {
		// var votes = post.votes;
		
		post.votes++;

		
		if (post.votes < 0) {
			$scope.voteStyle = {color: 'red'};
		}
		else if (post.votes === 0) {
			$scope.voteStyle = {color: 'black'};
		}
		else {
			$scope.voteStyle = {color: 'green'};
		}
	};

	$scope.voteDown = function(post) {
		post.votes--;

		if (post.votes < 0) {
			$scope.voteStyle = {color: 'red'};
		}
		else if (post.votes === 0) {
			$scope.voteStyle = {color: 'black'};
		}
		else {
			$scope.voteStyle = {color: 'green'};
		}
	};


	// $scope.post.showComments = false;

	$scope.addComment = function(post) {
		if (post.addComment === false) {
			post.addComment = true;
		}
		else {
			post.addComment = false;
		}
	};

	$scope.showComments = function(post) {
		if (post.showComments === false) {
			post.showComments = true;
		}
		else {
			post.showComments = false;
		}
	};

	$scope.submitComment = function(post) {
		var newComment = {
			author: post.comAuthor,
			comment: post.comment
		}

		post.comments.push(newComment);

		post.showComments = false;

		post.comAuthor = '';
		post.comment = '';
	}


})