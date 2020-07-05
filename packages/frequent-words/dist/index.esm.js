import { range } from '@vect/vector-init';
import { merges } from '@vect/vector-merge';

/**
 * 0-9: 48-57
 * a-z: 97-122
 * A-Z: 65-90
 * @type {string[]}
 */

const alphabets = range(97, 122).map(x => String.fromCharCode(x));
const numerals = range(48, 57).map(x => String.fromCharCode(x));
const prepositions = ['of', 'to', 'on', 'in', 'at', 'by', 'up', 'out', 'for', 'with', 'from', 'upon', 'down', 'into', 'onto', 'than', 'under', 'toward', 'before', 'after', 'behind', 'during', 'inside', 'against', 'between', 'outside', 'without', 'through', 'beneath', 'throughout'];
const adverbs = ['all', 'not', 'no', 'nor', 'neither', 'either', 'any', 'again', 'never'];
const conjunctions = ['and', 'but', 'if', 'or', 'so', 'as', 'therefore', 'however', 'although', 'even', 'though', 'yet', 'once'];
const pronouns = ['you', 'i', 'he', 'she', 'it', 'it\'s', 'we', 'they', 'me', 'him', 'himself', 'her', 'herself', 'us', 'them', 'themselves', 'your', 'yourself', 'my', 'myself', 'his', 'her', 'its', 'our', 'your', 'their', 'this', 'these', 'that', 'that\'s', 'those', 'their', 'theirs', 'there', 'then', 'what', 'which', 'where', 'who', 'whose', 'whom', 'when', 'while', 'whence', 'why', 'how', 'other'];
const articles = ['a', 'an', 'the'];
const auxiliaryVerbs = ['have', 'has', 'had', 'may', 'might', 'do', 'don\'t', 'did', 'done', 'shall', 'should', 'will', 'would', 'can', 'could', 'must'];
const linkVerbs = ['is', 'am', 'was', 'are', 'were', 'be', 'been', 'get', 'being'];
const punctuations = ['\"', '\"i', '\'', '-', '*', '_'];
const reserved = ['gutenberg', 'tm', 'www'];
const frequentWords = merges(alphabets, prepositions, conjunctions, pronouns, articles, linkVerbs, auxiliaryVerbs, adverbs, punctuations, reserved);

export { adverbs, alphabets, articles, auxiliaryVerbs, conjunctions, frequentWords, linkVerbs, prepositions, pronouns, punctuations, reserved };
