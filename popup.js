/**
 * @file 弹窗逻辑文件
 * @author zhaohang12@baidu.com
 * @date 2020-09-11 16:10:16
 */

const e = s => {
    return document.querySelector(s)
}

let button = e('button')
let input = e('input')
let img = e('#img')

const getDataUrl = src => {
    QRCode.toDataURL(src, function(err, url) {
        if (err) throw err
        img.style.backgroundImage = `url(${url})`
    })
}

const initImg = () => {
    chrome.tabs &&
        chrome.tabs.getSelected(null, function(tab) {
            input.value = tab.url
            getDataUrl(tab.url)
        })
}

const initBtn = () => {
    button.addEventListener('click', () => {
        let value = input.value.trim()
        if (value) {
            getDataUrl(value)
        }
    })
}

const __main = () => {
    initImg()
    initBtn()
}

__main()
