angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.informationTabDefaultPage', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/informationTabDefaultPage.html',
          controller: 'informationTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.liveFeedTabDefaultPage', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/liveFeedTabDefaultPage.html',
          controller: 'liveFeedTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.userProfileTabDefaultPage', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/userProfileTabDefaultPage.html',
          controller: 'userProfileTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('school', {
      url: '/page5',
      templateUrl: 'templates/school.html',
      controller: 'schoolCtrl'
    })
        
      
    
      
        
    .state('news', {
      url: '/page6',
      templateUrl: 'templates/news.html',
      controller: 'newsCtrl'
    })
        
      
    
      
        
    .state('games', {
      url: '/page7',
      templateUrl: 'templates/games.html',
      controller: 'gamesCtrl'
    })
        
      
    
      
        
    .state('players', {
      url: '/page8',
      templateUrl: 'templates/players.html',
      controller: 'playersCtrl'
    })
        
      
    
      
        
    .state('sports', {
      url: '/page9',
      templateUrl: 'templates/sports.html',
      controller: 'sportsCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/page10',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('basketball', {
      url: '/page11',
      templateUrl: 'templates/basketball.html',
      controller: 'basketballCtrl'
    })
        
      
    
      
        
    .state('football', {
      url: '/page12',
      templateUrl: 'templates/football.html',
      controller: 'footballCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});