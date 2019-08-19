# AngularRBOC

### Uses HTTP interceptors for:

1) Mocking a Backend end 
2) Capturing HTTP 401 and 403 and automatically logging client out
3) Capturing JWT and recording in local storage

### There are two routes HOME and ADMIN

These routes are protected by route guards that enforce client-side security. 

Most of the work is done in the `auth` and `services` folders
