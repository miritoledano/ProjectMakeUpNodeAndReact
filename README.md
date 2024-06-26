# פרויקט חנות מקוונת - צד לקוח

במסגרת הפרויקט פיתחתי אתר אינטרנט מתקדם הכולל שלוש סוגי משתמשים: מנהל, משתמש רשום ואורח. האתר כולל את הפונקציות הבאות:

**מסך כניסה והרשמה**: מאפשר למשתמשים להירשם או להתחבר למערכת. לאחר ההתחברות המשתמש מופנה לעמוד הבית עם ניתובים שונים בהתאם לסוג המשתמש.
**ניהול משתמשים**: למנהל יש אפשרות להוספה, עדכון ומחיקה של משתמשים ומוצרים.
**רכישות ותפקיד אורח**: משתמש אורח אינו יכול לבצע רכישות אלא אם נרשם או התחבר למערכת. בנוסף, הסל קניות נשמר באמצעות LocalStorage ואינו נשמר למשתמש אורח.

## טכנולוגיות עיקריות

**React**: לבניית ממשק המשתמש בצורה דינמית ואינטראקטיבית.
**Node.js**: לניהול צד השרת וטיפול בבקשות המשתמשים.
**MongoDB עם שירות Atlas**: לניהול ואחסון נתוני המשתמשים והמוצרים.
**JWT**: לניהול אוטנטיקציה מאובטחת של המשתמשים.
**הגנה על מסלולים (Route Protection)**: URL לניהול הרשאות לפי כתובות .
**React Hooks ו-Redux**:-  כללי לשמירהת נתונים ובדיקות תקינות בטפסי התחברות ורישום slice- ניהול מצבים מורכבים באפליקציה כולל שימוש ב
**MUI ו-Bootstrap**: לעיצוב מודרני וידידותי למשתמש של האתר.
## מבנה הפרויקט
**src/** - תיקייה המכילה את כל קבצי המקור של האפליקציה.
**components/** - קומפוננטות React לשימוש חוזר.
**pages/** - דפי האפליקציה השונים.
**redux/** - Redux. קבצים לניהול מצבים עם
**services/** - API קבצים לניהול קריאות.
 ## פונקציות עיקריות
**רישום והתחברות**- משתמשים יכולים להירשם ולהתחבר למערכת.
**ניהול מוצרים**- משתמשים יכולים לצפות במוצרים, להוסיף לסל הקניות ולבצע רכישות.
**ניהול סל קניות** - המשתמשים יכולים לשמור מוצרים בסל הקניות שלהם באמצעות LocalStorage.
**הגנה על מסלולים** (Route Protection) - ניתוב דינמי לפי סוג המשתמש ואוטנטיקציה.


![צילום מסך 2024-06-04 005225](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/a6f337b9-0552-4e07-9d54-8c3fe862e3c9)
![צילום מסך 2024-06-04 005634](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/584cc47f-2721-4bcf-b500-5ffc9b0fcd75)
![צילום מסך 2024-06-04 005706](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/cccd34a8-6fce-4618-a9d1-e3a396c11846)
![צילום מסך 2024-06-04 010000](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/8b01c434-66f1-4b86-b7f4-902633366548)
![צילום מסך 2024-06-04 010010](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/506cb9b6-0798-4e51-b4c1-b8963a7c29c3)
![צילום מסך 2024-06-04 010036](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/321bf1ef-8f06-4b32-8c55-8da3d4cd096a)
![צילום מסך 2024-06-04 010051](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/43011d70-d7b2-4442-a11f-c7b3720f2894)
![צילום מסך 2024-06-04 010100](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/205888cc-078e-43e1-abb4-d238dbdd8f2d)
![צילום מסך 2024-06-04 010930](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/3babffa9-f5d6-484e-9086-6f0a13c1be37)
![צילום מסך 2024-06-04 005716](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/0f757a63-c37a-4704-8f64-745224276a3c)
![צילום מסך 2024-06-04 005733](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/96b0f5d9-c2a8-4705-9da4-12df02401559)
![צילום מסך 2024-06-04 005747](https://github.com/miritoledano/ProjectMakeUpNodeAndReact/assets/150906463/fc357543-88d8-40a1-ae8f-e752fece805c)
