var app = angular.module('redditClone', []);

app.controller('MainController', function($scope) {
	window.scope = $scope;

	$scope.view = {};
	$scope.view.showForm = false;
	$scope.view.sort = 'votes';

	$scope.view.reverse = "+";



	$scope.sort = function(sortBy) {

		sortBy = sortBy || $scope.view.sort;

		var reverse = document.getElementById('reverse');

		if (reverse) {
			$scope.view.reverse = "-";
		}
		else {
			$scope.view.reverse = "-";
		}
		// debugger

		$scope.view.sort = $scope.view.reverse + sortBy;
	}

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

	

	$scope.posts = [{image: "http://lorempixel.com/400/200", author: 'Hamlet', title: "SoMa", description: 'great place', votes: 0, date: Date.now(), comments: [{author: 'RUFINA'}], showComments: false, addComment: false, voteStyle: {} }, 
	{image: "http://lorempixel.com/400/200", author: 'Hamlet', title: "Yerevan", description: 'great place', votes: 5, date: Date.now(), comments: [{author: 'RUFINA'}], showComments: false, addComment: false, voteStyle: {} },
	{image: "http://lorempixel.com/400/200", author: 'Hamlet', title: "LA", description: 'great place', votes: 3, date: Date.now(), comments: [{author: 'RUFINA'}], showComments: false, addComment: false, voteStyle: {} }
	];
	
	$scope.voteStyle = {};







	$scope.voteUp = function(post) {
		// var votes = post.votes;

		post.votes++;

		
		if (post.votes < 0) {
			post.voteStyle = {color: 'red'};
		}
		else if (post.votes === 0) {
			post.voteStyle = {color: 'black'};
		}
		else {
			post.voteStyle = {color: 'green'};
		}
	};

	$scope.voteDown = function(post) {
		post.votes--;

		if (post.votes < 0) {
			post.voteStyle = {color: 'red'};
		}
		else if (post.votes === 0) {
			post.voteStyle = {color: 'black'};
		}
		else {
			post.voteStyle = {color: 'green'};
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

		post.showComments = true;
		post.addComment = false;

		post.comAuthor = '';
		post.comment = '';
	}


})