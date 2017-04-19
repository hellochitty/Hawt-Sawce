## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Nav
 - Sidebar


**SaucesContainer**
  - Sauce Header
  * SauceIndex

**SauceIndex**
 - SauceIndexItem
  + SauceDetail

**NewSauceContainer**
  -  New Sauce Form

**CheckinsContainer**
  - Checkins Header
  * CheckinIndex

**CheckinsIndex**
 - CheckinIndexItem
  + CheckinDetail

**NewCheckinContainer**
  -  New Checkin Form

**UserProfile**
 - User profile
  + UserDetail
  - CheckinIndexItem


## Routes
| Path                          | Component            |
|-------------------------------|----------------------|
| "/"                           | "Splashpage"          |
| "/signup"                    | "AuthFormContainer"  |
| "/login"                     | "AuthFormContainer"  |
| "/home"                       | "HomeContainer"      |
| "/home/sauces/"               | "SaucesContainer"    |
| "/home/sauces/:sauce_id"      | "ShowSauceContainer" |
| "/home/users/:user"           | "ProfileContainer"   |
| "/home/users/:user/check_ins" | "CheckinsContainer"  |
| "/home/feed/"                 | "CheckinsContainer"  |

## Diagram
<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Hawt_Sawce_Component_Diagram.png" alt="Index View" width="600">
