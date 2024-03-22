import bodyParser from 'body-parser'

export const urlParser = bodyParser.urlencoded({ extended: false });

export const jsonParser = bodyParser.json();

