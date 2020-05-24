/**
 * @description 文档链接: https://u.tools/docs/developer/api.html
 */
export const UTools =  {
  // 事件相关API
  /**
   * @description 当插件装载成功，uTools将会主动调用这个方法（生命周期内仅调用一次）
   * @description 注意：uTools 的其他api以及preload.js中定义的方法，都需要在此回调被执行后才可被调用，否则将报错。
   * @param cb 回调函数
   */
  onPluginReady:'',

  /**
   * @description 每当插件从后台进入到前台时，uTools将会主动调用这个方法
   * @param cb 回调函数
   */
  onPluginEnter:'',

  /**
   * @description 每当插件从前台进入到后台时，uTools将会主动调用这个方法
   * @param cb 回调函数
   */
  onPluginOut:'',

  /**
   * @description 用户对插件进行分离操作时，uTools将会主动调用这个方法
   * @param cb 回调函数
   */
  onPluginDetach:'',

  /**
   * @description 当此插件的数据在其他设备上被更改后同步到此设备时，uTools将会主动调用这个方法
   * @param cb 回调函数
   */
  onDbPull:'',

  // 数据库 api
  db: '',

  // 窗口交互 API
  /**
   * @description 执行该方法将会隐藏uTools主窗口，包括此时正在主窗口运行的插件，分离的插件不会被隐藏。
   */
  hideMainWindow:'',

  /**
   * @description 执行该方法将会显示uTools主窗口，包括此时正在主窗口运行的插件。
   */
  showMainWindow: '',

  /**
   * 执行该方法将会修改插件窗口的高度。
   * @param height 窗口的高度
   */
  setExpendHeight: '',

  /**
   * @description 设置子输入框，进入插件后，原本uTools的搜索条主输入框将会变成子输入框，子输入框可以为插件所使用。
   * @param onChange 回调函数
   * @param placeholder 自输入框提示
   * @param isFocus 是否聚焦
   */
  setSubInput: '',

  /**
   * @description 移出先前设置的子输入框，在插件切换到其他页面时可以重新设置子输入框为其所用。
   */
  removeSubInput: '',

  /**
   * @description 直接对子输入框的值进行设置。
   * @param val 需要输入的值
   */
  setSubInputValue: '',

  /**
   * @description 子输入框获得焦点
   */
  subInputFocus:'',

  /**
   * @description 子输入框获得焦点并选中
   */
  subInputSelect:'',

  /**
   * @description 子输入框失去焦点，插件获得焦点
   */
  subInputBlur:'',

  /**
   * @description 执行该方法将会退出当前插件。
   */
  outPlugin:'',

  /**
   * 该方法可以携带数据，跳转到另一个插件进行处理，如果用户未安装对应的插件，uTools会弹出提醒并引导进入插件中心下载。
   * @param cmd 插件关键词
   * @param content
   */
  redirect: '',

  // 动态增减
  /**
   * @description 返回本插件所有动态增加的功能。
   */
  getFeatures: '',

  /**
   * @description 为本插件动态新增某个功能。
   * @param feature feature
   */
  setFeature: '',

  /**
   * @description 动态删除本插件的某个功能。
   * @param code feature.code
   */
  removeFeature: '',

  // 其他
  /**
   * @description 执行该方法将会弹出一个系统通知。
   * @param body 显示的内容
   * @param code 用户点击系统通知时，uTools将会使用此`code`进入插件
   * @param silent 是否播放声音
   */
  showNotification: '',

  /**
   * @description 该方法只适用于在macOS下执行，用于判断uTools是否拥有辅助权限，如果没有可以调用API方法requestPrivilege请求
   */
  isHadPrivilege:'',

  /**
   * @description  该方法只适用于在macOS下执行，该方法调用后会弹出窗口向用户申请辅助权限。
   */
  requestPrivilege:'',

  /**
   * @description 你可以通过名称请求以下的路径
   * home 用户的 home 文件夹（主目录）
   * appData 当前用户的应用数据文件夹，默认对应：
   *   %APPDATA% Windows 中
   *   ~/Library/Application Support macOS 中
   * userData 储存你应用程序设置文件的文件夹，默认是 appData 文件夹附加应用的名称
   * temp 临时文件夹
   * exe 当前的可执行文件
   * desktop 当前用户的桌面文件夹
   * documents 用户文档目录的路径
   * downloads 用户下载目录的路径
   * music 用户音乐目录的路径
   * pictures 用户图片目录的路径
   * videos 用户视频目录的路径
   * logs 应用程序的日志文件夹
   * @param name
   */
  getPath: '',
  /**
   * @description 复制文件或文件夹到剪贴板
   * @param paths
   */
  copyFile: '',
  /**
   * @description 复制图片到剪贴板
   * @param buffer
   */
  copyImage: '',
  /**
   * @description 屏幕取色
   * @param cb
   */
  screenColorPick:'',
  /**
   * @description 获取当前浏览器URL (呼出uTools前的活动窗口)
   */
  getCurrentBrowserUrl: '',
  /**
   * @description 获取本地机器唯一ID，可以根据此值区分同一用户的不同设备
   */
  getLocalId: '',

  /**
   * robotjs是一个优秀的自动化库，可以实现控制鼠标、键盘、获取屏幕信息等功能，可以实现很多自动化操作。
   */
  robot: '',
}
