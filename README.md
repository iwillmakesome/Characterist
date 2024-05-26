# Characterist
Website for sharing character pictures

## Tech Stack
+ Environment
    + Jetbrain - Webstorm
    + Github
+ Development
    + Frontend
        + Vite
        + React
        + Styled Components
    + Backend
        + Javascript
        + Express.js
        + Node.js
        + Sqlite3
    + Package Manager
        + Npm
+ Design
    + Figma


---

<details>
<summary>more info</summary>
<div markdown="1">

### How to start
1. clone git repository
2. go to each front / back folder
3. npm install
4. front : npm run dev / back : npm start

### Commit Message Rule
- `DESKTOP / MAC`
- `Front / Back`
- `[dependency]`
- `[add]`
- `[func]`
- `[fix]`

### import Rule
1. react
2. styles
3. components
4. utils (functions, stores)

</div>
</details>



# Frontend

Views (Flame) - Likes (Star)

inc flame
inc star

## Pages
- Main page
- List page


## Upload
- Upload page : upload scenes
- Add Character Page : add characters
- Add Media Page : add media contents

---


# Backend

## Models
- Scene
- Character
- Media
- 

### Scene Model
|attribute|type|option|
|---|---|---|
|Posted Date|text|
|Id|integer|UNIQUE PRIMARY_KEY|
|File Location|text|UNIQUE|
|File Type|text|
|Title|text|
|People|text|
|Group|text|
|Flame(view)|integer|
|Star(Like)|integer|

#### Scene Search Function
+ Title
+ People
+ Group
+ Tags

### Media MODEL
|attribute|type|option|
|---|---|---|
|ID|integer|UNIQUE PRIMARY_KEY|
|Name|text|

### Character Model
|attribute|type|option|
|---|---|---|
|ID|integer|UNIQUE PRIMARY_KEY|
|Name|text|

#### Character and Media Relation
| attribute |type| option      |
|-----------|---|-------------|
| ID        |integer|
| people_id |integer| PRIMARY_KEY |
| group_id  |integer| PRIMARY_KEY |

### Tag Model
|attribute|type|option|
|---|---|---|
|ID|integer|UNIQUE PRIMARY_KEY|
|Name|text|
#### Tag and Scene Relation
|attribute|type| option      |
|---|---|-------------|
|ID|integer|
|tag_id|integer| PRIMARY_KEY |
|view_id|integer| PRIMARY_KEY |

---------
