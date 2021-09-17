// alert("This is function alert");
// confirm("Are yor 18 year old");
// prompt("Please enter fullname :");
/*
var fullname = "Thai Minh Chi";

var isSucceeded = false;
console.log(typeof isSucceeded);
var myFunction = function () {
	alert("Please enter");
};
console.log(typeof myFunction);
// Object types
var myOject = {
	name: "Thai Minh Chi",
	age: 18,
	address: "Can Tho",
	myFunction: function () {
		alert("Please enter 1 : ");
	},
};
console.log(myOject);

var myLanguage = [
	"HTML",
	"CSS",
	"JavaScript",
	"Java",
	"Servlet",
	"JSP",
	"Spring",
];
console.log(myLanguage);

var commentText = "Học chưa hiểu là học chưa đủ!";
var authorName = "Sơn Đặng:";
var fullCommentText = `${authorName} ${commentText}`;
console.log(fullCommentText);
var commentText =
	"Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó";

alert(commentText);
*/
// var title = "Học Javascript tại F8";
// var language = title.slice(
// 	title.indexOf("Javascript"),
// 	title.indexOf("Javascript") + "Javascript".length
// );
// var rest = title.slice(title.indexOf("Javascript") + "Javascript".length);
// console.log(`Language is ${language} and rest is ${rest}`);

// var str1 = "hi";
// var str2 = "Hi";
// function run(a, b) {
// 	a = a.toLowerCase();
// 	b = b.toUpperCase();
// 	return a + "|" + b;
// }
// console.log(run(str1, str2));

// var number = 1;
// console.log(Number.isInteger(number));
// var anArray = [1, 2, 3, 4];
// function run(anArray) {
// 	if (anArray.length < 3) {
// 		anArray.shift();
// 	} else if (anArray.length > 2) {
// 		anArray.slice(0, 2);
// 	}

// 	return anArray;
// }
// run(anArray);
// console.log(anArray);

// var array = [1, 2, 3, 4];
// console.log(array.slice(0, 2));
// console.log(array.pop()); //xoa cuoi mang
// console.log(array.push(5)); // them cuoi mang
// console.log(array.shift()); // xoa dau mang
// console.log(array.unshift(6)); // them dau mang
// console.log(array.splice(0, 1)); // bat dau , xoa , them
// console.log(array);
// function stringInString(needle, haystack) {
// 	if (
// 		typeof haystack != "string" ||
// 		typeof needle != "string" ||
// 		haystack.indexof(needle) == -1
// 	)
// 		return false;
// 	else return true;
// }
// var needle = "JS";
// var haystack = "Hoc JS tai F8";
// console.log(haystack.indexOf(needle));
// function checkExistIdol(array, b) {
// 	for (var check of array) {
// 		return b === check;
// 	}
// }
// var array = ["Nguyen Van A", "Tran Van B"];
// var b = "Nguyen Van A";
// console.log(checkExistIdol(array, b));

// var myInfo = {
// 	name: "Thai Minh Chi",
// 	age: 22,
// 	address: "Can Tho, Viet Nam",
// };

// myInfo.getname = function () {
// 	return myInfo.name;
// };
// console.log(myInfo.getname());

// function Info(name, age, address) {
// 	this.name = name;
// 	this.age = age;
// 	this.address = address;

// 	this.getInfo = function () {
// 		return `${this.name} - ${this.age} - ${this.address}`;
// 	};
// }

// var u1 = new Info("Chi Thai", 22, "Can Tho, Viet Nam");
// var u2 = new Info("Ngan Dang", 20, "Can Tho, Viet Nam");
// var u3 = new Info("Phuong Phan", 22, "Can Tho, Viet Nam");

// var ArrayUser = [u1, u2, u3];

// var age_find = function () {
// 	for (var check of ArrayUser) {
// 		if (check.age == 20) return check.name;
// 	}
// };

// console.log(age_find());

// var date = new Date();

// console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
// function run(a) {
// 	return Number.isInteger(a) ? a : Math.floor(a);
// }

// console.log(run(6.8));

// var list_language_need = ["HTML", "CSS", "JavaScript", "Python", "Java"];
// for (var i = 0; i < list_language_need.length; i++) {
// 	console.log(list_language_need[i]);
// }

// var i = 1;
// var isSuccess = true;

// do {
// 	if (isSuccess == false) {
// 		console.log("Nap the xai lan thu " + i);
// 	} else {
// 		console.log("The cao hop le");
// 	}
// 	i++;
// } while (!isSuccess && i <= 3);

// for (var i = 100; i >= 0; i -= 5) {
// 	console.log(i);
// }
// var formValues = [
// 	{ field: "name", value: "Sơn Đặng" },
// 	{ field: "age", value: 18 },
// 	{ field: "address", value: "Hà Nội" },
// ];
// function getRequestBodyFromValues(formValues) {
// 	var obj = {};
// 	formValues.forEach(function (item) {
// 		console.log(obj);
// 		obj[item.field] = item.value;
// 	});

// 	return obj;
// }

// console.log(getRequestBodyFromValues(formValues));
// function checkPositiveNumbers(numbers) {
// 	return numbers.some(function (number) {
// 		return number > 0;
// 	});
// }
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(checkPositiveNumbers(numbers));

// var monters = [
// 	{
// 		name: "Cá heo",
// 		attack: 50,
// 		speed: 100,
// 		hitpoint: 100,
// 	},
// 	{
// 		name: "Khủng long",
// 		attack: 150,
// 		speed: 80,
// 		hitpoint: 180,
// 	},
// 	// ...
// ];
// function findAMonsterByAttack(monsters) {
// 	return monsters.find(function (monster) {
// 		return monster.attack === 150;
// 	});
// }

// console.log(findAMonsterByAttack(monters));
// function findStringsInArrayByKeyword(keyword, strings) {
// 	var mang = strings.filter(function (string) {
// 		return string.search(keyword) != -1;
// 	}, []);

// 	return mang;
// }
// var strings = ["hi", "abc", "chuỗi", "123"];

// console.log(findStringsInArrayByKeyword("hi", strings));

// var obj = {};
// obj["keyword"] = "name";

// console.log(obj);

// function findEqualValues(array1, array2) {
// 	var array3 = [];
// 	var check = array1.forEach(function (value1) {
// 		return array2.filter(function (value2) {
// 			if (value1 === value2) {
// 				array3.push(value1);
// 			}
// 		});
// 	});
// 	return array3;
// }
// array1 = [1, 2, 6, 8];
// array2 = [2, 9, 6];

// console.log(findEqualValues(array1, array2));

// var str = ["Thai Minh Chi", " Minh Chi", "Chi"];

// var str1 = "Chi";
// function search_string(str1) {
// 	return str.filter(function (str2) {
// 		return str2.search(str1) !== -1;
// 	});
// }
// console.log(search_string(str1));

// var courses = [
// 	{
// 		id: 1,
// 		name: "HTML",
// 		coin: 0,
// 	},
// 	{
// 		id: 2,
// 		name: "CSS",
// 		coin: 1,
// 	},
// 	{
// 		id: 3,
// 		name: "Javascript",
// 		coin: 2,
// 	},
// 	{
// 		id: 4,
// 		name: "Python",
// 		coin: 3,
// 	},
// ];

// console.log(courses);

// var newCourse = courses.map(function (course, index) {
// 	return {
// 		id: course.id,
// 		name: `Khoa hoc : ${course.name}`,
// 		coin: course.coin,
// 		coinTex: `Gia: ${course.coin}`,
// 		index: index,
// 		originArray: courses,
// 	};
// });
// console.log(newCourse);
// function convertToBoolean(inputs) {
// 	var newInputs = inputs.map(function (input) {
// 		if (
// 			input === 0 ||
// 			input === false ||
// 			input === undefined ||
// 			input === null ||
// 			input === NaN
// 		) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	});

// 	return newInputs;
// }
// var inputs = [1, "hi", false, 8, undefined, "", NaN];
// console.log(convertToBoolean(inputs));

// function convertToNumber(inputs) {
// 	return inputs.map(function (input) {
// 		return Number(input);
// 	});
// }
// var inputs = ["1", "2", "-4"];
// var newInput = convertToNumber(inputs);
// console.log(typeof newInput[0]);

// var courses = [
// 	{
// 		id: 1,
// 		name: "HTML",
// 		coin: 0,
// 	},
// 	{
// 		id: 2,
// 		name: "CSS",
// 		coin: 1,
// 	},
// 	{
// 		id: 3,
// 		name: "Javascript",
// 		coin: 2,
// 	},
// 	{
// 		id: 4,
// 		name: "Python",
// 		coin: 3,
// 	},
// ];

// var totalCoin = courses.reduce(function (total, course) {
// 	return total + course.coin;
// }, 0);
// console.log(totalCoin);

// function sumNumbers(inputs) {
// 	return inputs.reduce(function (total, input) {
// 		if (typeof input === "number" && !isNaN(input)) {
// 			return total + input;
// 		} else return total + 0;
// 	}, 0);
// }

// var inputs = [1, 2, function () {}, NaN];

// console.log(sumNumbers(inputs));
//
// var array = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = array.reduce(function (total, item) {
// 	return total.concat(item);
// }, []);
// console.log(flatArray);

// var topics = [
// 	{
// 		topic: "front-end",
// 		courses: [
// 			{
// 				id: 1,
// 				title: "HTML,CSS",
// 			},
// 			{
// 				id: 2,
// 				title: "Javascript",
// 			},
// 		],
// 	},
// 	{
// 		topic: "back-end",
// 		courses: [
// 			{
// 				id: 3,
// 				title: "Python",
// 			},
// 			{
// 				id: 4,
// 				title: "SQL",
// 			},
// 		],
// 	},
// ];

// var result = topics.reduce(function (courses, topic) {
// 	return courses.concat(topic.courses);
// }, []);

// console.log(result);

// Trường hợp có 2 đối số
// Array.prototype.reduce2 = function (callback, result) {
// 	for (var i = 0; i < this.length; i++) {
// 		result = callback(result, this[i], i, this);
// 	}
// 	return result;
// };

// Trường hợp chỉ truyền 1 đối số
// Array.prototype.reduce2 = function (callback, result) {
// 	if (arguments.length < 2) {
// 		var i = 0;
// 		result = this[i++];
// 	}
// 	for (; i < this.length; i++) {
// 		result = callback(result, this[i], i, this);
// 	}
// 	return result;
// };
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce2(function (callback, initialValue) {
// 	return callback + initialValue;
// });

// console.log(result);

// var title = "Thai Minh Chi";
// console.log(title.search("Chi"));
// console.log(title.includes("Chi"));

// var courses = ["HTML", "CSS", "Javascript", "Python", "SQL"];
// console.log(courses.includes("Python"));

// for (var i = 0; i < 10; i++) {
// 	console.log(Math.floor(Math.random() * 10));
// }
// var name = "TMC";
// console.log("name : ", name);

// var courses = ["HTML", "Python", "CSS", "Javascript", "NodeJS", "Python"];

// Array.prototype.forEach2 = function (callback) {
// 	for (var i in this) {
// 		if (this.hasOwnProperty(i)) {
// 			callback(this[i], i, this);
// 		}
// 	}
// };

// courses.forEach2(function (course) {
// 	console.log(course);
// });

// Array.prototype.filter2 = function (callback) {
// 	var output = [];

// 	for (var index in this) {
// 		if (this.hasOwnProperty(index)) {
// 			var result = callback(this[index], index, this);
// 			if (result) {
// 				output.push(this[index]);
// 			}
// 		}
// 	}
// 	return output;
// };

// var kq2 = courses.filter2(function (course) {
// 	return course === "Python";
// });
// var kq = courses.filter(function (course) {
// 	return course === "Python";
// });
// console.log("filter2: ", kq2);
// console.log("filter: ", kq);

// var couses = [
// 	{ name: "HTML , CSS , JavaScript", coin: 700, isFinish: true },
// 	{ name: "Python", coin: 800, isFinish: true },
// 	{ name: "NodeJS, SQL", coin: 860, isFinish: true },
// ];
// Array.prototype.some2 = function (callback) {
// 	for (var index in this) {
// 		if (this.hasOwnProperty(index)) {
// 			return callback(this[index], index, this);
// 		}
// 	}
// 	return false;
// };
// Array.prototype.every2 = function (callback) {
// 	var output = true;
// 	for (var index in this) {
// 		if (this.hasOwnProperty(index)) {
// 			output = callback(this[index], index);
// 			if (!output) {
// 				break;
// 			}
// 		}
// 	}
// 	return output;
// };
// var kq = couses.every(function (course) {
// 	return course.isFinish;
// });
// console.log(kq);

//----------DOM----------------

// document.write("Hello guys!!");

// var headingNode = document.getElementById("heading");

// console.log({
// 	element: headingNode,
// });

// var boxHTMLCollection = document.getElementsByClassName("box");
// var box1Element = document.querySelector(".container .box:first-child");
// var box2Element = document.querySelector(".container .box:nth-child(2)");
// var allItemElements = document.querySelectorAll("li");
// var box1ItemElements = document.querySelectorAll(
// 	".container .box:first-child li"
// );
// var box2ItemElements = document.querySelectorAll(
// 	".container .box:nth-child(2) li"
// );
// console.log(boxHTMLCollection);
// console.log(box1Element);
// console.log(box2Element);
// console.log(allItemElements);
// console.log(box1ItemElements);
// console.log(box2ItemElements);

/*Get list elements li là con trực tiếp của ul thứ nhất và lưu vào biến listItems1
Get list elements li là con trực tiếp của ul thứ hai và lưu vào biến listItems2
Get list elements li là con trực tiếp của ul thứ nhất và ul thứ hai sau đó lưu vào biến listItems3

<ul class="parent">
    <li>"Cày" JS DOM tại F8</li>
    <li>"Cày" JS DOM tại F8</li>

    <ul>
        <li>"Cày" JS DOM tại F8</li>
        <li>"Cày" JS DOM tại F8</li>

        <ul>
            <li>"Cày" JS DOM tại F8</li>
            <li>"Cày" JS DOM tại F8</li>
        </ul>
    </ul>
</ul>
*/

// var listItems1 = document.querySelectorAll(".parent > li");
// var listItems2 = document.querySelectorAll(".parent > ul > li");
// var listItems3 = document.querySelectorAll(".parent > li, .parent > ul > li");

// var checkboxNodes = document.querySelectorAll("input[type='checkbox']");
// var checkbox1Element = document.querySelectorAll(
// 	"input[type='checkbox'][value='1']"
// );
// var checkboxCheckedAndNotDisabled = document.querySelectorAll(
// 	"input[type='checkbox'][checked]:not([disable])"
// );
// var checkboxDisabledAndNotChecked = document.querySelectorAll(
// 	"input[disable]:not([checked])"
// );
// var checkboxCheckedAndDisabled = document.querySelectorAll(
// 	"input[disable]:[checked]"
// );

/**
<div type="checkbox" value="1" name="answer"></div>
<input type="checkbox" value="1" name="answer" />
<input type="checkbox" value="2" name="answer" checked />
<input type="checkbox" value="3" name="answer" disabled />
<input type="checkbox" value="4" name="answer" checked disabled />

var checkboxNodes = document.querySelectorAll("input[type='checkbox']");
var checkbox1Element = document.querySelector("input[type='checkbox'][value='1']");
var checkboxCheckedAndNotDisabled = document.querySelector("input[type='checkbox'][checked]:not([disabled])");
var checkboxDisabledAndNotChecked = document.querySelector('input[disabled]:not([checked])');

var checkboxCheckedAndDisabled = document.querySelector('input[disabled][checked]');
 */
// function binhchon() {
// 	danhsachchon.innerHTML = "";
// 	for (var i = 0; i < document.forms[0].answer.length; i++) {
// 		if (document.forms[0].answer[i].checked) {
// 			danhsachchon.innerHTML += document.forms[0].answer[i].value;
// 		}
// 	}
// }
// var listItemNode = document.querySelector(".box-1");

// console.log(listItemNode);
// var boxElement = document.querySelector(".box");
// console.log(boxElement);
// var childrenElements = boxElement.querySelector(".children");
// console.log(childrenElements);

// var box = document.querySelector("#box1");
// console.log(box);

// function sent() {
// 	list.innerHTML =
// 		document.forms["form-1"].name.value +
// 		" ," +
// 		document.forms["form-1"].address.value +
// 		" ," +
// 		document.forms["form-1"].phone.value;
// }

// var heading = document.querySelector("h1");
// console.log(heading);

// heading.style = "color : red";
// heading.setAttribute("class", "Heading");

// console.log(heading.getAttribute("style"));

// var headingElement = document.querySelector(".heading");
// console.log(headingElement.innerHTML); // getter
// headingElement.innerText = "New Heading"; // setter
// alert(`${headingElement.innerHTML} after setter`);

// var boxElement = document.querySelector(".box");

// boxElement.innerHTML = "<h1>Heading</h1>";

// console.log(boxElement.innerHTML);
// console.log(document.querySelector("h1").innerText);

// var boxElement = document.querySelector(".box");

// boxElement.outerHTML = "<h1>Heading</h1>";

// console.log(boxElement.outerHTML);

// var divElement = document.querySelector("body > div > ul");
// divElement.innerHTML = "<li> li1 </li>" + "<li> li2 </li>" + "<li> li3 </li>";

// var divElement1 = document.querySelectorAll("body div")[1];
// divElement1.outerHTML = "<h1> div 2 </h1>";

var boxElement = document.querySelector(".box");
console.log(boxElement.childElementCount);
