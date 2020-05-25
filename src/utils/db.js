function createRandomId() {
  return (
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getTime() +
    "/" +
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    Math.random()
      .toString()
      .substr(2, 5)
  );
}
export const toLocaleString = function(dateTime) {
  let cdate = new Date(dateTime);
  var year = cdate.getFullYear(); //取得4位数的年份
  var month =
    cdate.getMonth() + 1 > 9
      ? cdate.getMonth() + 1
      : "0" + (cdate.getMonth() + 1); //取得日期中的月份，其中0表示1月，11表示12月
  var date = cdate.getDate() > 9 ? cdate.getDate() : "0" + cdate.getDate(); //返回日期月份中的天数（1到31）
  var hour = cdate.getHours() > 9 ? cdate.getHours() : "0" + cdate.getHours(); //返回日期中的小时数（0到23）
  var minute =
    cdate.getMinutes() > 9 ? cdate.getMinutes() : "0" + cdate.getMinutes(); //返回日期中的分钟数（0到59）
  var second =
    cdate.getSeconds() > 9 ? cdate.getSeconds() : "0" + cdate.getSeconds(); //返回日期中的秒数（0到59）
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
};
let utools = window.utools;

// 上传数据更新数据
export const putApi = (data) => {
  console.log("上传数据更新数据", {
    ...data,
    _id: data["_id"] || createRandomId(),
  });
  return new Promise((resolve, reject) => {
    let res = utools.db.put({
      ...data,
      _id: data["_id"] || createRandomId(),
    });
    if (res) {
      console.log("🐛:: putApi -> res", res);
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 获取数据
export const getApi = (id) => {
  console.log("🐛:: getApi -> id", id);
  return new Promise((resolve, reject) => {
    let res = utools.db.get(id);
    if (res) {
      console.log("🐛:: getApi -> res", res);
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 移除数据
export const removeApi = (id) => {
  console.log("🐛:: removeApi -> id", id);
  return new Promise((resolve, reject) => {
    let res = utools.db.remove(id);
    if (res) {
      console.log("🐛:: removeApi -> res", res);
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 批量更新数组
export const bulkDocsApi = (data) => {
  return new Promise((resolve, reject) => {
    let res = utools.db.bulkDocs(data);
    if (res) {
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 获取所有数据
export const allDocsApi = (data) => {
  return new Promise((resolve, reject) => {
    let res = utools.db.allDocs(data);
    if (res) {
      console.log("🐛:: allDocsApi -> res", res);
      resolve(res);
    } else {
      reject("出错");
    }
  });
};
