import {test,expect} from '@playwright/test'
import exp from 'constants';
import { cpSync } from 'fs';
import { afterEach } from 'node:test';
import { exit } from 'process';


const fName= "Test"
const email= "test@getMaxListeners.com"
const cAddress= "#33,1st cross,bangalore"
const pAddress= "Same as Current address"

test.beforeEach(async({page})=>{
    test.slow()
    await page.goto("https://demoqa.com/",/*{timeout:90000}*/)
    await page.getByRole("link",{ name: 'Selen11ium Online Training'}).isVisible()
   
    //applied in above hooks
// await page.goto("https://demoqa.com/",/*{timeout:90000}*/)
// await page.getByRole("link",{ name: 'Selen11ium Online Training'}).isVisible()
const elementCard=page.getByText("Elements")
await elementCard.isVisible()
await elementCard.click()
await elementCard.isVisible()
await page.getByText("Please select an item from left to start practice.").isVisible
await elementCard.click()
const tesBox=page.getByText("Text Box")
if(await tesBox.isVisible())
{
    console.log("Text box displayed")
}
else
{
    await elementCard.click()
}
})

test("Text Box Validation",async ( { page})=>{
const tesBox=page.getByText("Text Box")
await tesBox.click()
await page.getByRole('heading',{ name: "Text Box"}).isVisible()
await page.getByRole('textbox',{ name:"Full Name"}).fill(fName)
await page.getByPlaceholder("name@example.com").fill(email)
await page.getByRole('textbox',{ name: "Current Address" }).fill(cAddress)
await page.locator('#permanentAddress').fill(pAddress)
await page.getByRole('button',{name: 'Submit'}).click()
const name= await page.locator('#name').textContent()
const emails=await page.locator('#email').textContent()
const cuAddress=await page.locator('p#currentAddress').textContent()
const peAddress=await page.locator('p#permanentAddress').textContent()
//check if the entered text matches with the saved data
expect(name).toContain(fName)
expect(emails).toContain(email)
expect(cuAddress).toContain(cAddress)
expect(peAddress).toContain(pAddress)
});

test("")