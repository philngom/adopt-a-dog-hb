// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dogObj = {
        id: 123,
        created_at: new Date(),
        description: 'some random text here to describe dog',
        breed: 'corgi',
        name: 'Hass'
    };

    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dogObj);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.nodeType === 1, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dogObj = {
        id: 123,
        created_at: new Date(),
        description: 'some random text here to describe dog',
        breed: 'corgi',
        name: 'Hass'
    };

    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(dogObj);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.nodeType === 1, expected);
});
