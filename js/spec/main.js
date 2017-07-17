/* global descrie, it */
import { expect } from 'chai';
import getChange from '../main';


describe('getChange', function () {
  it('is a function', function () {
    expect(getChange).to.be.a('function');
  });
  it('takes two arguments', function (){
    expect(getChange.length).to.equal(2);
  });
  it('returns an object', function (){
    expect(getChange(5.34,20)).to.be.a('object');
  });
  it('returns the correct answers for 5.34, 20', function (){
    expect(getChange(5.34,20)).to.eql(
      {'1': 1, '5': 1, '10': 1, '50': 1, '200': 2, '1000': 1});
  });
  it('returns the correct answers for 9.99,10', function (){
    expect(getChange(9.99, 10)).to.eql(
      {'1': 1, '5': 0, '10': 0 , '50': 0, '200': 0, '1000': 0});
  });
  it('returns the correct answers for 14.96,20)', function (){
    expect(getChange(14.96,20)).to.eql(
      {'1': 4, '5': 0, '10': 0, '50': 2, '200': 2, '1000': 0});
  });
});
