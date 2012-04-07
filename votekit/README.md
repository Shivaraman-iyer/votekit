*API documentation*
This is an API for use by apps for polling.
It allows you to creat 3 kinds of polls:
* Simple list
* List with an option of 'Like' or 'Dislike'
* List with an option of star rating

It handles the following requests:
####GET
  *Function: Get all polls
  *URL: http://<server-address>:<port>/api/poll/

  *Function: Get recent x polls by author
  *URL: http://<server-address>:<port>/api/poll/get_recent_polls_by_author/:author/:x

  *Function: Get poll by id
  *URL: http://<server-address>:<port>/api/poll/get_poll_by_id/:id

  *Function: Get all polls by author
  *URL: http://<server-address>:<port>/api/poll/get_poll_by_author/:author

  *Function: Get x recent polls by date
  *URL: http://<server-address>:<port>/api/poll/get_recent_polls_by_date/:x

  *Function: Get average star rating on a particular option if a poll
  *URL: http://<server-address>:<port>/api/poll/get_avg_star_rating/:id/:optionNum
  
  *Function: Get number of 'likes' on a particular option if a poll
  *URL: http://<server-address>:<port>/api/poll/get_num_of_likes/:id/:optionNum
  
  *Function: Get number of 'dislikes' on a particular option if a poll
  *URL: http://<server-address>:<port>/api/poll/get_num_of_dislikes/:id/:optionNum
  
  *Function: Get number of votes on a particular option if a poll
  *URL: http://<server-address>:<port>/api/poll/get_num_of_votes/:id/:optionNum

####POST
*PUT*