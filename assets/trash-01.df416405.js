import{M as l,r as i,N as A}from"./entry.51e084a1.js";const c=l("emails",{state:()=>({isSelectAllChecked:!1,archivedEmails:i([]),selectedEmails:i([]),emails:i([]),isLoading:!1,showEmailModal:!1,isArchived:!1}),actions:{async getEmails(){this.isLoading=!0,this.emails=(await A(()=>import("./data.69e4352f.js"),[],import.meta.url)).default,this.isLoading=!1},toggleSelected(e){this.isSelected;const s=this.selectedEmails.indexOf(e);s>=0?this.selectedEmails.splice(s,1):this.selectedEmails.push(e)},selectAll(){this.selectedEmails.length===this.emails.length?(this.selectedEmails.forEach(e=>{e.isSelected=!1}),this.selectedEmails=[]):this.emails.forEach(e=>{this.selectedEmails.includes(e)||(this.selectedEmails.push(e),e.isSelected=!0)}),this.isSelectAllChecked=this.selectedEmails.length===this.emails.length,this.selectedEmails.length<=1&&(this.isSelectAllChecked=!1)},updateSelectAllChecked(){const e=this.selectedEmails.length===this.emails.length;this.isSelectAllChecked=e,this.isSelectAllChecked=e},markRead(){this.selectedEmails.forEach(e=>{e.isRead=!0})},emailDetails(){this.selectedEmails.forEach(e=>{console.log(e.title)})},archiveEmail(){this.selectedEmails.forEach(e=>{if(e.isArchived===!1){e.isArchived=!0,e.isSelected=!1,this.archivedEmails.push(e);const s=this.selectedEmails.indexOf(e);s>=0&&this.selectedEmails.splice(s,1);const t=this.emails.indexOf(e);t>=0&&this.emails.splice(t,1)}})}},getters:{emailsNumber(){return this.selectedEmails.length},archived(){return this.archivedEmails.filter(e=>e.isArchived===!0)}}}),d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgBxVRNTsJAFH4zQOOSI9QTCCcQdgZMbKIQdyJq4s7egHoCcedCpe6MP0lNhLiDG8AN7BGMRkMoned75UdEimBI/JKmM33zvvneXwEWCDHNaBhmvKO9HgkUKRTY+Oio04Zjv8xNtrZVSEVEpEJLHRBbIESC1i4R7z7enTcm+chJarL54gkR1REQyDldvbtMIvhJ3pPCeja3VzGMQ32qslE1qOD0w/et8bDWt/YtIiyxSvK2qjcXV9/IWE1Xe6sgggGALQS1W7u1WxCWgu2CLn1ZFyB02toxL3bsOGduQEayn1kNhXRM+bBgRoyqfPf8pORbmIiNZNiZlItJyOQOEnR+tb/VlwDiwwKgAIcT7MW850y+WAoj4ZSwXYBqkleCXIY5+6om4oOKqDQbKVyLQx9XyQXyYm9NtnOB3j21zP03sEdHDz9d2y69CplckQ+UWGU2v1/uYPdKE3KH5Juk3pUo09X7Xq/RWfipbAS120tb81RS0O2k2NQg0gyIuF3oe1jTRiEETq+/TCpQmdogRWrcgZowROEX9EO3YQZIWCDkUhuCcRFCrsAfwH8UfrcBXoIJWN/cK6OEI1o2gGduduj0pLgwtfsLczjowWiA2qDmjc/KJJDVyId5RvB/8AlJcuPENl1tqAAAAABJRU5ErkJggg==",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBxVTBTsJAEJ1ZWg9c7CfULxC/QL0ZuOxBEo5EYsIN/kD8A7x5s0cTL/VG4qH+AfoF1j+ABA3pdnedBUmLthUaEqdJd3Z25s2bzc4A7FAw76DevKwhqF7aphVM96Q99P3bcGMw3uq6QooxhdMHk5SzY/4fQh48+97kZ5yVBRbJ6AQBnQjU0dOD95KwbRPbyrhqM05bL5OZYRLFUXtlZAwPtQaulboBxISB1g4y1tMIPij9ujJ/xmpomC6YxXHsIuJVEvOdiQLXUy9vBSkR6XxlrloWXQk8rvk2mp2gcd4JYAPJ8mWwQykE47zvpPX0fmswYc0CKufO6FFlOhD2LCgNplE5iW7emC7PbFv5PzBqrknRuVV0qCrqdD5f9qa29GDRqWXBRvdemKXnyVqZSqt36tYa5123KMj0Mi0u+YaQx2xRitTHwhZv9eZFmAdG48k8E5BCXaftv+bZWavtMlHpI4P9PDAzJJWUw5H/d+ml5Qs+GZVYsHgRagAAAABJRU5ErkJggg==";export{d as _,h as a,c as u};
