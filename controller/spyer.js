const superagent = require('superagent');
const cheerio = require('cheerio');
const randomUseragent = require('random-useragent');

const accountDao = require('../db/dao/spyer');

async function do58spy(url) {
    return new Promise((resolve, reject) => {
        superagent
            .get(url)
            .set('user-agent', randomUseragent.getRandom())
            .then(data => {
                const $ = cheerio.load(data.text);
                const list = [];
                $('#list_con .job_item').each(function (i, el) {
                    const obj = {
                        jobName: $(this).find('.job_name').text().trim(),
                        jobSalary: $(this).find('.job_salary').text().trim() + $(this).find('.unit').text().trim(),
                        companyName: $(this).find('.comp_name a').text().trim(),
                    };
                    list.push(obj);
                })
                resolve(list);
            })
            .catch(err => {
                reject(err);
            })
    })
}

async function spy58page(ctx) {
    try {
        const { url } = ctx.query;
        if (!url) {
            return ctx.body = {
                code: 1,
                msg: 'params url is not must',
                result: null
            }
        }
        const list = await do58spy(url);
        const result = await accountDao.save(list);
        ctx.body = {
            code: 0,
            msg: 'ok',
            result: list
        }

    } catch (error) {
        ctx.body = {
            code: 1,
            msg: 'fail',
            result: null
        }
        console.log('spyer58error, error', error)
    }

}

module.exports = {
    spy58page
}
