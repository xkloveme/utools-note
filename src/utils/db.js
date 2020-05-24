function createRandomId() {
  return (
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    "-" +
    new Date().getTime() +
    "-" +
    Math.random()
      .toString()
      .substr(2, 5)
  );
}
let utools = window.utools;

// 上传数据更新数据
export const putApi = (data) => {
  return new Promise((resolve, reject) => {
    let res = utools.db.put({
      _id: data._id || createRandomId(),
      ...data,
    });
    if (res) {
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 获取数据
export const getApi = (id) => {
  return new Promise((resolve, reject) => {
    let res = utools.db.get(id);
    if (res) {
      resolve(res);
    } else {
      reject("出错");
    }
  });
};

// 移除数据
export const removeApi = (id) => {
  return new Promise((resolve, reject) => {
    let res = utools.db.remove(id);
    if (res) {
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
      resolve(res);
    } else {
      reject("出错");
    }
  });
};