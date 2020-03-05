/ *!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Inclui Sizzle.js
 * https://sizzlejs.com/
 *
 * Fundação JS de direitos autorais e outros contribuidores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 2018-01-20T17: 24Z
 * /
(função (global, fábrica) {

	"use strict";

	if (tipo de módulo === "objeto" && typeof module.exports === "objeto") {

		// Para ambientes CommonJS e CommonJS, onde uma `janela` apropriada
		// está presente, executa a fábrica e obtém o jQuery.
		// Para ambientes que não possuem `window` com um` document`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade da criação de uma "janela" real.
		// por exemplo var jQuery = require ("jquery") (janela);
		// Veja o bilhete # 14549 para mais informações.
		module.exports = global.document?
			fábrica (global, true):
			função (w) {
				if (! w.document) {
					lançar novo erro ("jQuery requer uma janela com um documento");
				}
				retorno de fábrica (w);
			};
	} outro {
		fábrica (global);
	}

// Passar esta se a janela ainda não está definida
}) (janela typeof window == "undefined"?: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando o código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// arguments.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam guardadas em um bloco try.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (objeto);

suporte var = {};

var isFunction = função isFunction (obj) {

      // Suporte: Chrome <= 57, Firefox <= 52
      // Em alguns navegadores, typeof retorna "function" para elementos HTML <object>
      // (isto é, `typeof document.createElement (" object ") ===" function "`).
      // Não queremos classificar * qualquer * nó DOM como uma função.
      return typeof obj === "function" && typeof obj.nodeType! == "numero";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		tipo: verdadeiro
		src: true,
		noModule: true
	};

	função DOMEval (código, doc, nó) {
		doc = doc || documento;

		var i,
			script = doc.createElement ("script");

		script.text = código;
		if (nó) {
			para (i em preservadosScriptAtributos) {
				if (nó [i]) {
					script [i] = nó [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Suporte: Android <= 2,3 apenas (functionExplexp)
	return typeof obj === "objeto" || typeof obj === "function"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * símbolo global * /
// Definir este global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var
	versão = "3.3.1",

	// Definir uma cópia local do jQuery
	jQuery = function (seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'enhanced'
		// Precisa de init se jQuery for chamado (apenas permita que o erro seja lançado se não for incluído)
		return new jQuery.fn.init (seletor, contexto);
	}

	// Suporte: Android <= 4.0 apenas
	// Certifique-se de que cortamos o BOM e o NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function () {
		return slice.call (isso);
	}

	// Obtém o N-ésimo elemento no conjunto de elementos correspondente OU
	// Obtém o elemento inteiro combinado definido como um array limpo
	get: function (num) {

		// Retorna todos os elementos em um array limpo
		if (num == null) {
			return slice.call (isso);
		}

		// Retorna apenas o elemento do conjunto
		return num <0? isso [num + this.length]: this [num];
	}

	// Pegue uma matriz de elementos e empurre-a para a pilha
	// (retornando o novo conjunto de elementos correspondente)
	pushStack: function (elems) {

		// Construir um novo conjunto de elementos jQuery correspondido
		var ret = jQuery.merge (this.constructor (), elems);

		// Adiciona o objeto antigo na pilha (como referência)
		ret.prevObject = isto;

		// Retorna o conjunto de elementos recém formado
		retorno ret;
	}

	// Execute um retorno de chamada para cada elemento no conjunto correspondente.
	each: function (callback) {
		return jQuery.each (isso, retorno de chamada);
	}

	map: function (callback) {
		return this.pushStack (jQuery.map (isso, função (elem, i) {
			return callback.call (elem, i, elem);
		}));
	}

	slice: function () {
		return this.pushStack (slice.apply (isto, argumentos));
	}

	primeiro: function () {
		return this.eq (0);
	}

	last: function () {
		return this.eq (-1);
	}

	eq: function (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [este [j]]: []);
	}

	end: function () {
		return this.prevObject || this.constructor ();
	}

	// Apenas para uso interno.
	// se comporta como o método de uma matriz, não como um método jQuery.
	empurre empurre,
	ordenar: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	opções var, nome, src, copy, copyIsArray, clone,
		target = arguments [0] || {}
		i = 1,
		length = arguments.length,
		deep = false;

	// Lidar com uma situação de cópia profunda
	if (tipo de alvo === "booleano") {
		profundo = alvo;

		// Pula o booleano e o alvo
		alvo = argumentos [i] || {};
		i ++;
	}

	// Lida com maiúsculas e minúsculas quando o alvo é uma string ou algo assim (possível em cópia profunda)
	if (tipo de alvo! == "objeto" &&! isFunction (target)) {
		target = {};
	}

	// Estender o próprio jQuery se apenas um argumento for passado
	if (i === length) {
		target = this;
		Eu--;
	}

	para (; i <comprimento; i ++) {

		// Somente lidar com valores não nulos / indefinidos
		if ((options = argumentos [i])! = null) {

			// Estende o objeto base
			para (nome em opções) {
				src = target [name];
				copy = opções [nome];

				// Prevenir loop sem fim
				if (target === copy) {
					continuar;
				}

				// Recurse se estivermos mesclando objetos ou matrizes simples
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy)))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray (src)? src: [];

					} outro {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Nunca mova objetos originais, clone-os
					target [name] = jQuery.extend (deep, clone, copy);

				// Não traga valores indefinidos
				} else if (copy! == undefined) {
					target [name] = copy;
				}
			}
		}
	}

	// Retorna o objeto modificado
	meta de retorno;
};

jQuery.extend ({

	// Unique para cada cópia do jQuery na página
	expando: "jQuery" + (versão + Math.random ()) .replace (/ \ D / g, ""),

	// Assume que o jQuery está pronto sem o módulo pronto
	isReady: true

	erro: function (msg) {
		lançar novo erro (msg);
	}

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detectar negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos host
		if (! obj || toString.call (obj)! == "[objeto objeto]") {
			retorna falso;
		}

		proto = getProto (obj);

		// Objetos sem protótipo (por exemplo, `Object.create (null)`) são simples
		if (! proto) {
			retorno verdadeiro;
		}

		// Objetos com protótipo são simples, se foram construídos por uma função global Object
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	}

	isEmptyObject: function (obj) {

		/ * eslint-disable no-unused-vars * /
		// Veja https://github.com/eslint/eslint/issues/6125
		nome var;

		para (nome em obj) {
			retorna falso;
		}
		retorno verdadeiro;
	}

	// Avalia um script em um contexto global
	globalEval: function (code) {
		DOMEval (código);
	}

	each: function (obj, callback) {
		var comprimento, i = 0;

		if (isArrayLike (obj)) {
			length = obj.length;
			para (; i <comprimento; i ++) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					pausa;
				}
			}
		} outro {
			para (i em obj) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					pausa;
				}
			}
		}

		return obj;
	}

	// Suporte: Android <= 4.0 apenas
	trim: function (text) {
		texto de retorno == null?
			"":
			(texto + "") .replace (rtrim, "");
	}

	// os resultados são apenas para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
					[arr]: arr
				);
			} outro {
				push.call (ret, arr);
			}
		}

		retorno ret;
	}

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	}

	// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
	// push.apply (_, arraylike) é lançado no antigo WebKit
	merge: function (primeiro, segundo) {
		var len = + segundo.length
			j = 0,
			i = first.length;

		para (; j <len; j ++) {
			primeiro [i ++] = segundo [j];
		}

		first.length = i;

		retornar primeiro;
	}

	grep: function (elems, retorno de chamada, invertido) {
		var callbackInverse,
			matches = [],
			i = 0,
			comprimento = elems.length,
			callbackExpect =! invertido;

		// Passa pela matriz, salvando apenas os itens
		// que passam a função validadora
		para (; i <comprimento; i ++) {
			callbackInverse =! retorno de chamada (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		retornar correspondências;
	}

	// arg é apenas para uso interno
	map: function (elems, callback, arg) {
		var comprimento, valor
			i = 0,
			ret = [];

		// Percorre o array, traduzindo cada um dos itens para seus novos valores
		if (isArrayLike (elems)) {
			comprimento = elems.length;
			para (; i <comprimento; i ++) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Passa por todas as chaves do objeto
		} outro {
			para (eu em elems) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Achatar quaisquer matrizes aninhadas
		return concat.apply ([], ret);
	}

	// Um ​​contador GUID global para objetos
	guid: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para que ele precise existir.
	suporte: suporte
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Preencher o mapa class2type
jQuery.each ("Boolean Number String Function Matriz Data RegExp Objeto Símbolo de Erro" .split (""),
função (eu, nome) {
	class2type ["[objeto" + nome + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// Suporte: iOS 8.2 real (não reproduzível no simulador)
	// `in` check usado para evitar o erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// em relação ao comprimento do Nodelist no IE
	var length = !! obj && "length" em obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		retorna falso;
	}

	tipo de retorno === "array" || comprimento === 0 ||
		typeof length === "number" && length> 0 && (length - 1) em obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation e outros colaboradores
 * Lançado sob a licença MIT
 * http://jquery.org/license
 *
 * Data: 2016-08-08
 * /
(função (janela) {

var i,
	Apoio, suporte,
	Expr
	getText,
	isXML,
	tokenize
	compilar,
	selecione,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Documento local vars
	setDocument,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	fósforos,
	contém,

	// Dados específicos da instância
	expando = "sizzle" + 1 * new Date (),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = função (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		return 0;
	}

	// Instance methods
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use um indexOf despojado, pois é mais rápido que o nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (list, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (lista [i] === elem) {
				return i;
			}
		}
		return -1;
	}

	booleans = "checked | selected | async | autofocus | autoplay | controls | defer | disabled | oculto | ismap | loop | multiple | aberto | readonly | obrigatório | scoped",

	// Expressões regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espaço em branco = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Seletores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	Atributos = "\\ [" + espaço em branco + "* (" + identificador + ") (?:" + espaço em branco +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espaço em branco +
		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou sequências [captura 3 ou captura 4]"
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identificador + ")) |)" + espaço em branco +
		"* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +
		// Para reduzir o número de seletores que precisam de tokenize no preFilter, prefira os argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simples (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +
		// 3. qualquer outra coisa (captura 2)
		". *" +
		") \\) |)",

	// Espaço em branco no final e não-escapado, capturando alguns caracteres que não são espaços em branco que precedem o último
	rwhitespace = new RegExp (espaços em branco + "+", "g"),
	rtrim = new RegExp ("^" + espaço em branco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espaço em branco + "+ $", "g "),

	rcomma = new RegExp ("^" + espaço em branco + "*", + espaço em branco + "*"),
	rcombinators = new RegExp ("^" + espaço em branco + "* ([> + ~] |" + espaço em branco + ")" + espaço em branco + "*"),

	rattributeQuotes = new RegExp ("=" + espaço em branco + "* ([^ \\] '\"] *?) "+ espaço em branco +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": new RegExp ("^ # (" + identificador + ")"),
		"CLASS": new RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": new RegExp ("^ (" + identificador + "| [*])"),
		"ATTR": new RegExp ("^" + atributos),
		"PSEUDO": novo RegExp ("^" + pseudos),
		"CHILD": new RegExp ("^ :( apenas | primeiro | último | nth | nth-last) - (filho | do-type) (?: \\ (" + espaço em branco +
			"* (par | ímpar | (([+ -] |) (\\ d *) n |)" + espaço em branco + "* (?: ([+ -] |)" + espaço em branco +
			"* (\\ d +) |))" + espaço em branco + "* \\) |)", "i"),
		"bool": new RegExp ("^ (?:" + booleanos + ") $", "i"),
		// Para uso em bibliotecas implementando .is ()
		// Usamos isso para correspondência de PDV em `select`
		"needsContext": new RegExp ("^" + espaço em branco + "* [> + ~] |: (par | ímpar | eq | gt | lt | nth | primeiro | último) (?: \\ (" +
			espaço em branco + "* ((?: - \\ d)? \\ d *)" + espaço em branco + "* \\) |) (? = [^ -] | $)", "i")
	}

	rinputs = / ^ (?: input | select | textarea | botão) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /,

	// IDs facilmente pesquisáveis ​​/ recuperáveis ​​ou seletores TAG ou CLASS
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espaço em branco + "? | (" + espaço em branco + ") |.)", "ig"),
	funescape = function (_, escaped, escapedWhitespace) {
		var high = "0x" + escape - 0x10000;
		// NaN significa não-codepoint
		// Suporte: Firefox <24
		// Solução alternativa de interpretação numérica errônea de + "0x"
		retorne alto! == alto || escapouWhitepace?
			escapou:
			alto <0?
				// Codepoint do BMP
				String.fromCharCode (alta + 0x10000):
				// Código complementar do plano suplementar (par substituto)
				String.fromCharCode (alta >> 10 | 0xD800, alta e 0x3FF | 0xDC00);
	}

	// serialização de string / identificador CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL se torna U + FFFD CHARACTER DE SUBSTITUIÇÃO
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// Caracteres de controle e números (dependentes da posição) escapam como pontos de código
			retornar ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Outros caracteres ASCII potencialmente especiais recebem escape com escape de barra invertida
		devolve "\\" + ch;
	}

	// Usado para iframes
	// Veja setDocument ()
	// Remover o wrapper de função causa uma "Permissão negada"
	// erro no IE
	unloadHandler = function () {
		setDocument ();
	}

	disabledAncestor = addCombinator (
		função (elem) {
			return elem.disabled === true && ("form" no elem || "label" no elem);
		}
		{dir: "parentNode", próximo: "legend"}
	);

// Optimize para push.apply (_, NodeList)
experimentar {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Suporte: Android <4.0
	// Detectar falha silenciosamente push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} pegar (e) {
	push = {aplicar: arr.length?

		// Alavancar fatia, se possível
		function (target, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Suporte: IE <9
		// Caso contrário, acrescentar diretamente
		function (target, els) {
			var j = target.length,
				i = 0;
			// Não é possível confiar em NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

Sizzle função (seletor, contexto, resultados, sementes) {
	var m, eu, elem, nid, jogo, grupos, newSelector,
		newContext = context && context.ownerDocument,

		// O padrão do nodeType é 9, pois o contexto é padronizado para documentar
		nodeType = contexto? context.nodeType: 9;

	resultados = resultados || [];

	// Retorna cedo das chamadas com seletor ou contexto inválido
	if (tipo de seletor! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		retornar resultados;
	}

	// Tente atalho localizar operações (em oposição a filtros) em documentos HTML
	if (! seed) {

		if ((contexto? context.ownerDocument || contexto: preferredDoc)! == document) {
			setDocument (contexto);
		}
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get * By *"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if (nodeType! == 11 && (match = rquickExpr.exec (seletor)))) {

				// seletor de ID
				if ((m = corresponde [1])) {

					// Contexto do documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Suporte: IE, Opera, Webkit
							// TODO: identificar versões
							// getElementById pode corresponder elementos por nome em vez de ID
							if (elem.id === m) {
								results.push (elem);
								retornar resultados;
							}
						} outro {
							retornar resultados;
						}

					// Contexto do elemento
					} outro {

						// Suporte: IE, Opera, Webkit
						// TODO: identificar versões
						// getElementById pode corresponder elementos por nome em vez de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contém (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							retornar resultados;
						}
					}

				// Digite o seletor
				} else if (match [2]) {
					push.apply (resultados, context.getElementsByTagName (seletor));
					retornar resultados;

				// Seletor de classe
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (resultados, context.getElementsByClassName (m));
					retornar resultados;
				}
			}

			// Tire proveito de querySelectorAll
			if (support.qsa &&
				! compiladorCache [seletor + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (seletor)))) {

				if (nodeType! == 1) {
					newContext = contexto;
					newSelector = seletor;

				// qSA procura fora do contexto do elemento, que não é o que queremos
				// Agradece a Andrew Dupont por essa técnica de solução alternativa
				// Suporte: IE <= 8
				// Exclude elementos do objeto
				} else if (context.nodeName.toLowerCase ()! == "objeto") {

					// Capture o ID do contexto, configurando-o primeiro se necessário
					if ((nid = context.getAttribute ("id")))) {
						nid = nid.replace (rcssescape, fcssescape);
					} outro {
						context.setAttribute ("id", (nid = expando));
					}

					// Prefixo cada seletor na lista
					grupos = tokenize (seletor);
					i = groups.length;
					enquanto eu-- ) {
						grupos [i] = "#" + nid + "" + toSelector (grupos [i]);
					}
					newSelector = groups.join (",");

					// Expandir contexto para seletores irmãos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				if (newSelector) {
					experimentar {
						push.apply (resultados,
							newContext.querySelectorAll (newSelector)
						);
						retornar resultados;
					} catch (qsaError) {
					} finalmente {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Todos os outros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semente);
}

/ **
 * Crie caches de valores-chave de tamanho limitado
 * @returns {function (string, object)} Retorna os dados do Objeto depois de armazená-los em si mesmo com
 * nome da propriedade a string (com espaço sufixo) e (se a cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 * /
function createCache () {
	var keys = [];

	cache de funções (chave, valor) {
		// Use (chave + "") para evitar colisão com propriedades nativas de protótipos (consulte o número 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Manter apenas as entradas mais recentes
			delete cache [keys.shift ()];
		}
		return (cache [chave + ""] = valor);
	}
	cache de retorno;
}

/ **
 * Marque uma função para uso especial por Sizzle
 * @param {Função} fn A função para marcar
 * /
função markFunction (fn) {
	fn [expando] = true;
	return fn;
}

/ **
 * Teste de suporte usando um elemento
 * @param {Função} fn Passou o elemento criado e retorna um resultado booleano
 * /
função assert (fn) {
	var el = document.createElement ("fieldset");

	experimentar {
		retorno !! fn (el);
	} pegar (e) {
		retorna falso;
	} finalmente {
		// Remover de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// libera memória no IE
		el = nulo;
	}
}

/ **
 * Adiciona o mesmo manipulador para todos os attrs especificados
 * @param {String} attrs Lista de atributos separada por pipe
 * @param {Function} manipulador O método que será aplicado
 * /
function addHandle (attrs, manipulador) {
	var arr = attrs.split ("|"),
		i = arr.length;

	enquanto eu-- ) {
		Expr.attrHandle [arr [i]] = manipulador;
	}
}

/ **
 * Verifica a ordem do documento de dois irmãos
 * @param {Element} a
 * @param {Elemento} b
 * @returns {Number} Retorna menos de 0 se a precede b, maior que 0 se a seguir b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex se disponível em ambos os nós
	if (diff) {
		return diff;
	}

	// Verifique se b segue um
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				return -1;
			}
		}
	}

	retornar um? 1: -1;
}

/ **
 * Retorna uma função para usar em pseudos para tipos de entrada
 tipo @param {String}
 * /
function createInputPseudo (type) {
	função de retorno (elem) {
		nome do var = elem.nodeName.toLowerCase ();
		return name === "input" && elem.type === type;
	};
}

/ **
 * Retorna uma função para usar em pseudos para botões
 tipo @param {String}
 * /
function createButtonPseudo (type) {
	função de retorno (elem) {
		nome do var = elem.nodeName.toLowerCase ();
		return (nome === "entrada" || nome === "botão") && elem.type === tipo;
	};
}

/ **
 * Retorna uma função para usar em pseudos para: enabled /: disabled
 * @param {Boolean} desativado true para: desativado; false para: enabled
 * /
function createDisabledPseudo (disabled) {

	// Conhecido: falsos positivos desativados: fieldset [desativado]> legenda: nth-of-type (n + 2): can-disable
	função de retorno (elem) {

		// Apenas determinados elementos podem corresponder: ativado ou: desativado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("form" no elem) {

			// Verifique a desativação herdada em elementos não desativados relevantes:
			// * elementos associados ao formulário listados em um fieldset desativado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desativado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos têm uma propriedade "form".
			if (elem.parentNode && elem.disabled === false) {

				// Os elementos da opção são transferidos para um optgroup pai, se presente
				if ("label" no elem) {
					if ("label" em elem.parentNode) {
						return elem.parentNode.disabled === desativado;
					} outro {
						return elem.disabled === desativado;
					}
				}

				// Suporte: IE 6 - 11
				// Use a propriedade de atalho isDisabled para verificar se há ancestrais de conjunto de campos desativados
				return elem.isDisabled === desativado ||

					// Onde não há isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === desativado;
			}

			return elem.disabled === desativado;

		// Tente remover elementos que não podem ser desativados antes de confiar na propriedade desativada.
		// Algumas vítimas são apanhadas na nossa rede (rótulo, legenda, menu, faixa), mas não devem
		// até existe neles, muito menos tem um valor booleano.
		} else if ("label" no elem) {
			return elem.disabled === desativado;
		}

		// Os elementos restantes não são: ativado nem: desativado
		retorna falso;
	};
}

/ **
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 * /
função createPositionalPseudo (fn) {
	return markFunction (função (argumento) {
		argumento = + argumento;
		return markFunction (função (semente, correspondências) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Corresponde elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if (seed [(j = matchIndexes [i])]) {
					semente [j] =! (combina [j] = semente [j]);
				}
			}
		});
	});
}

/ **
 * Verifica um nó quanto à validade como um contexto Sizzle
 * @param {Element | Object =} contexto
 * @returns {Element | Object | Boolean} O nó de entrada se aceitável, caso contrário, um valor falso
 * /
function testContext (contexto) {
	return context && typeof context.getElementsByTagName! == "indefinido" && contexto;
}

// Expor vars de suporte por conveniência
support = Sizzle.support = {};

/ **
 * Detecta nós XML
 * @param {Element | Object} elem Um elemento ou um documento
 * @returns {Boolean} True iff elem é um nó XML não HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement é verificado para casos em que ainda não existe
	// (como o carregamento de iframes no IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	retornar documentElement? documentElement.nodeName! == "HTML": false;
};

/ **
 * Define variáveis ​​relacionadas a documentos uma vez com base no documento atual
 * @param {Elemento | Objeto} [doc] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subwindow,
		doc = node? node.ownerDocument || nó: preferredDoc;

	// Retorna antecipadamente se o documento for inválido ou já estiver selecionado
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolução;
	}

	// Atualizar variáveis ​​globais
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Suporte: IE 9-11, Edge
	// Acessando documentos iframe após o descarregamento gera erros de "permissão negada" (jQuery # 13936)
	if (preferredDoc! == documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Suporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Suporte: IE 9 - 10 apenas
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/* Atributos
	-------------------------------------------------- -------------------- * /

	// Suporte: IE <8
	// Verifique se getAttribute realmente retorna atributos e não propriedades
	// (exceto o IE8 booleano)
	support.attributes = assert (função (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) Por *
	-------------------------------------------------- -------------------- * /

	// Verifique se getElementsByTagName ("*") retorna apenas elementos
	support.getElementsByTagName = assert (função (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Suporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Suporte: IE <10
	// Verifique se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não selecionam os nomes definidos no programa,
	// use um teste rotatório getElementsByName
	support.getById = assert (função (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID filter e encontre
	if (support.getById) {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = function (id, contexto) {
			if (tipo de contexto.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				retornar elem? [elem]: [];
			}
		};
	} outro {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				var node = tipo de elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				nó de retorno && node.value === attrId;
			};
		};

		// Suporte: apenas IE 6 - 7
		// getElementById não é confiável como um atalho de localização
		Expr.find ["ID"] = function (id, contexto) {
			if (tipo de contexto.getElementById! == "undefined" && documentIsHTML) {
				var nó, eu, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verifica o atributo id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Retorna em getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++]))) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				Retorna [];
			}
		};
	}

	// tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		função (tag, contexto) {
			if (tipo de contexto.getElementsByTagName! == "indefinido") {
				return context.getElementsByTagName (tag);

			// Nós do DocumentFragment não possuem gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		função (tag, contexto) {
			var elem,
				tmp = []
				i = 0,
				// Por feliz coincidência, um (quebrado) gEBTN aparece nos nós do DocumentFragment também
				results = context.getElementsByTagName (tag);

			// Filtrar possíveis comentários
			if (tag === "*") {
				while ((elem = resultados [i ++]))) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			retornar resultados;
		};

	// Classe
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, contexto) {
		if (tipo de contexto.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Suporte para QSA e matchesSelector

	// matchesSelector (: active) reporta false quando verdadeiro (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) relata false quando verdadeiro (Chrome 21)
	// Nós permitimos isso por causa de um bug no IE8 / 9 que gera um erro
	// sempre que `document.activeElement` é acessado em um iframe
	// Então, nós permitimos: foco passar pelo QSA o tempo todo para evitar o erro do IE
	// Veja https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Construir o regex do QSA
		// Estratégia de Regex adotada de Diego Perini
		assert (função (el) {
			// Select está definido para string vazia de propósito
			// Isto é para testar o tratamento do IE de não explicitamente
			// definindo um atributo de conteúdo booleano,
			// já que sua presença deve ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<opção selecionada = ''> </ option> </ select>";

			// Suporte: IE8, Opera 11-12.16
			// Nada deve ser selecionado quando strings vazias seguem ^ = ou $ = ou * =
			// O atributo de teste deve ser desconhecido no Opera, mas "seguro" para o WinRT
			// https://msdn.microsoft.com/pt-br/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espaço em branco + "* (?: '' | \" \ ")");
			}

			// Suporte: IE8
			// Atributos booleanos e "valor" não são tratados corretamente
			if (! el.querySelectorAll ("[selecionado]"). length) {
				rbuggyQSA.push ("\\ [" + espaço em branco + "* (?: valor |" + booleanos + ")");
			}

			// Suporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .comprimento) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: marcado deve retornar elementos da opção selecionada
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 gera erro aqui e não verá testes posteriores
			if (! el.querySelectorAll (": marcado"). length) {
				rbuggyQSA.push (": checked");
			}

			// Suporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// O seletor in-page `selector # id sibling-combinator` falha
			if (! el.querySelectorAll ("a #" + expando + "+ *") .comprimento) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		assert (função (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <opção /> </ select>";

			// Suporte: Aplicativos nativos do Windows 8
			// Os atributos type e name são restritos durante a atribuição .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("tipo", "oculto");
			el.appendChild (entrada) .setAttribute ("nome", "D");

			// Suporte: IE8
			// Impor a diferenciação de maiúsculas e minúsculas do atributo name
			if (el.querySelectorAll ("[nome = d]"). comprimento) {
				rbuggyQSA.push ("name" + whitespace + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: enabled /: disabled e elementos ocultos (elementos ocultos ainda estão habilitados)
			// IE8 gera erro aqui e não verá testes posteriores
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Suporte: IE9-11 +
			// IE's: o seletor desativado não seleciona os filhos dos conjuntos de campos desativados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 não joga em pseudos inválidos pós-comma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((corresponde = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (função (el) {
			// Verifique se é possível fazer correspondênciasSeletor
			// em um nó desconectado (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Isso deve falhar com uma exceção
			// Gecko não faz erro, retorna false
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contém
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Element contém outro
	// Propositadamente auto-exclusivo
	// Como em, um elemento não contém em si
	contém = hasCompare || rnative.test (docElem.contains)?
		função (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devolve a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		função (a, b) {
			if (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						retorno verdadeiro;
					}
				}
			}
			retorna falso;
		};

	/ * Classificando
	-------------------------------------------------- -------------------- * /

	// Ordenação de pedidos de documentos
	sortOrder = hasCompare?
	função (a, b) {

		// Sinalizar para remoção duplicada
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Classifique a existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		if (comparar) {
			return compare;
		}

		// Calcular posição se ambas as entradas pertencerem ao mesmo documento
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// Nós desconectados
		if (compare & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === comparar)) {

			// Escolha o primeiro elemento relacionado ao nosso documento preferido
			if (a === document || a.ownerDocument === preferredDoc && contains (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contém (preferredDoc, b)) {
				devolução 1;
			}

			// Manter o pedido original
			devolve sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		return compare & 4? -1: 1;
	}:
	função (a, b) {
		// Sair cedo se os nós forem idênticos
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Nós sem pai são documentos ou desconectados
		if (! aup ||! bup) {
			devolver um documento ==? -1:
				b === documento? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Se os nós são irmãos, podemos fazer uma verificação rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// Caso contrário, precisamos de listas completas de seus antepassados ​​para comparação
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Desça a árvore procurando uma discrepância
		while (ap [i] === bp [i]) {
			i ++;
		}

		voltar eu?
			// Faça uma verificação de irmãos se os nós tiverem um ancestral comum
			siblingCheck (ap [i], bp [i]):

			// Caso contrário, nós em nosso documento classificam primeiro
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	documento de devolução;
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Definir o documento vars se necessário
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Certifique-se de que os seletores de atributos sejam citados
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		! compiladorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr)))) {

		experimentar {
			var ret = matches.call (elem, expr);

			// IE matchesSelector do IE 9 retorna false em nós desconectados
			if (ret || support.disconnectedMatch ||
					// Também, os nós desconectados são considerados em um documento
					// fragmentar no IE 9
					elem.document && elem.document.nodeType! == 11) {
				retorno ret;
			}
		} pegar (e) {}
	}

	retornar Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (contexto, elem) {
	// Definir o documento vars se necessário
	if ((context.ownerDocument || context)! == document) {
		setDocument (contexto);
	}
	return contains (contexto, elem);
};

Sizzle.attr = function (elem, name) {
	// Definir o documento vars se necessário
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Não se deixe enganar pelas propriedades Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nome,! documentIsHTML):
			Indefinido;

	return val! == indefinido?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nome):
			(val = elem.getAttributeNode (name)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Erro ("Erro de sintaxe, expressão não reconhecida:" + msg);
};

/ **
 * Documentar a ordenação e remoção de duplicados
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (results) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que nós * saibamos * podemos detectar duplicatas, assumamos sua presença
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++]))) {
			if (elem === resultados [i]) {
				j = duplicatas.push (i);
			}
		}
		while (j--) {
			results.splice (duplicatas [j], 1);
		}
	}

	// Limpar entrada após ordenação para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	retornar resultados;
};

/ **
 * Função de utilitário para recuperar o valor de texto de uma matriz de nós DOM
 * @ param {Matriz | Elemento} elem
 * /
getText = Sizzle.getText = function (elem) {
	nó var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Se não houver nodeType, espera-se que seja um array
		while ((node ​​= elem [i ++]))) {
			// Não atravesse os nós de comentário
			ret + = getText (nó);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Use textContent para elementos
		// uso de innerText removido para consistência de novas linhas (jQuery # 11153)
		if (tipo de elem.textContent === "string") {
			return elem.textContent;
		} outro {
			// Atravessar seus filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// Não inclua comentários ou processamento de nós de instrução

	retorno ret;
};

Expr = Sizzle.selectors = {

	// Pode ser ajustado pelo usuário
	cacheLength: 50,

	createPseudo: markFunction,

	correspondência: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primeiro: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", primeiro: true},
		"~": {dir: "previousSibling"}
	}

	preFilter: {
		"ATTR": function (match) {
			match [1] = correspondência [1] .replace (runescape, funescape);

			// Mover o valor fornecido para corresponder [3], seja citado ou não
			match [3] = (match [3] || match [4] || jogo [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + correspondência [3] + "";
			}

			return match.slice (0, 4);
		}

		"CHILD": function (match) {
			/ * correspondências de matchExpr ["CHILD"]
				1 tipo (somente | nth | ...)
				2 o que (criança | de tipo)
				3 argumento (par | ímpar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 xn-component do argumento xn + y ([+ -]? \ D * n |)
				5 sinal de xn-componente
				6 x de componente xn
				7 sinal do componente y
				8 y de componente y
			* /
			match [1] = correspondência [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {
				// nth- * requer argumento
				if (! match [3]) {
					Sizzle.error (correspondência [0]);
				}

				// parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se que falso / verdadeiro vazado respectivamente para 0/1
				match [4] = + (match [4]? match [5] + (jogo [6] || 1): 2 * (jogo [3] === "even" || jogo [3] === " ímpar" ) );
				match [5] = + ((correspondência [7] + correspondência [8]) || correspondência [3] === "ímpar");

			// outros tipos proíbem argumentos
			} else if (match [3]) {
				Sizzle.error (correspondência [0]);
			}

			correspondência de retorno;
		}

		"PSEUDO": function (match) {
			excesso de var,
				unquoted =! match [6] && correspondência [2];

			if (matchExpr ["CHILD"]. teste (correspondência [0])) {
				return null;
			}

			// Aceitar argumentos citados como estão
			if (match [3]) {
				correspondência [2] = correspondência [4] || jogo [5] || "";

			// Retira caracteres em excesso de argumentos não citados
			} else if (sem aspas && rpseudo.test (sem aspas) &&
				// Obter excesso de tokenize (recursivamente)
				(excess = tokenize (sem aspas, verdadeiro)) &&
				// avançar para o próximo parêntese de fechamento
				(excess = sem aspas.indexOf (")", sem aspas.length - excesso) - unquoted.length)) {

				// o excesso é um índice negativo
				match [0] = corresponde [0] .slice (0, excesso);
				match [2] = sem.slice.slice (0, excesso);
			}

			// Retorna apenas as capturas necessárias pelo método de pseudo-filtro (tipo e argumento)
			return match.slice (0, 3);
		}
	}

	filter: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {retorno verdadeiro; }:
				função (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		}

		"CLASSE": function (className) {
			var pattern = classCache [className + ""];

			retorno padrão ||
				(padrão = new RegExp ("(^ |" + whitespace + ")" + className + "(" + espaço em branco + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (tipo de elem.className === "string" && elem.className || tipoof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		}

		"ATTR": função (nome, operador, cheque) {
			função de retorno (elem) {
				var result = Sizzle.attr (elem, nome);

				if (resultado == null) {
					operador de retorno === "! =";
				}
				if (! operador) {
					retorno verdadeiro;
				}

				resultado + = "";

				operador de retorno === "="? resultado === verificar:
					operador === "! ="? resultado! == verificar:
					operador === "^ ="? check && result.indexOf (check) === 0:
					operador === "* ="? verifique && result.indexOf (marque)> -1:
					operador === "$ ="? check && result.slice (-check.length) === verificar:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (verificar)> -1:
					operador === "| ="? resultado === check || result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		}

		"CHILD": function (type, what, argumento, primeiro, último) {
			var simples = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = o que === "do tipo";

			retornar primeiro === 1 && last === 0?

				// Atalho para: nth - * (n)
				função (elem) {
					return !! elem.parentNode;
				}:

				função (elem, contexto, xml) {
					var cache, uniqueCache, outerCache, nó, nodeIndex, start,
						dir = simples! == encaminhar "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = false;

					if (pai) {

						//: (first | last | only) - (child | of-type)
						if (simples) {
							while (dir) {
								nó = elem;
								while ((nó = nó [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) {

										retorna falso;
									}
								}
								// Inverte a direção para: only- * (se ainda não o tivermos feito)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							retorno verdadeiro;
						}

						start = [avançar parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) armazena dados de cache em `parent`
						if (forward && useCache) {

							// Buscar `elem` de um índice previamente armazenado em cache

							// ... de uma maneira amigável com o gzip
							nó = pai;
							outerCache = node [expando] || (nó [expando] = {});

							// Suporte: IE <9 apenas
							// Defesa contra attroperties clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Retorna à procura de `elem` desde o início
								(diff = nodeIndex = 0) || start.pop ())) {

								// Quando encontrado, cache indexes no `parent` e break
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									pausa;
								}
							}

						} outro {
							// Use o índice do elemento armazenado em cache anteriormente, se disponível
							if (useCache) {
								// ... de uma maneira amigável com o gzip
								nó = elem;
								outerCache = node [expando] || (nó [expando] = {});

								// Suporte: IE <9 apenas
								// Defesa contra attroperties clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// ou: nth-last-child (...) ou: nth (-last)? - of-type (...)
							if (diff === false) {
								// Use o mesmo loop acima para procurar o `elem` desde o início
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((deTipo?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) &&
										++ diff) {

										// Cache do índice de cada elemento encontrado
										if (useCache) {
											outerCache = node [expando] || (nó [expando] = {});

											// Suporte: IE <9 apenas
											// Defesa contra attroperties clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (nó === elem) {
											pausa;
										}
									}
								}
							}
						}

						// Incorpore o offset e verifique o tamanho do ciclo
						diff - = last;
						return diff === primeiro || (diff% primeiro === 0 && diff / first> = 0);
					}
				};
		}

		"PSEUDO": function (pseudo, argument) {
			// nomes de pseudo-classe são insensíveis a maiúsculas e minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar pela sensibilidade caso em pseudos personalizados de caso são adicionados com l maiúsculas Etters
			// Lembre-se que setFilters herda de pseudos
			var args
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo não suportado:" + pseudo);

			// O usuário pode usar o createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como o Sizzle
			if (fn [expando]) {
				return fn (argumento);
			}

			// Mas mantenha suporte para assinaturas antigas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (função (semente, correspondências) {
						var idx,
							correspondido = fn (semente, argumento),
							i = corresponded.length;
						enquanto eu-- ) {
							idx = indexOf (semente, casada [i]);
							semente [idx] =! (corresponde [idx] = correspondido [i]);
						}
					}):
					função (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	}

	pseudos: {
		// pseudos potencialmente complexos
		"not": markFunction (função (seletor) {
			// Aparar o seletor passado para compilar
			// para evitar o tratamento de líderes e finais
			// espaços como combinadores
			var input = [],
				results = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (função (semente, correspondências, contexto, xml) {
					var elem,
						unmatched = matcher (seed, null, xml, []),
						i = seed.length;

					// Corresponde elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ((elem = sem correspondência [i])) {
							semente [i] =! (combina [i] = elem);
						}
					}
				}):
				função (elem, contexto, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);
					// Não mantenha o elemento (questão 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"has": markFunction (função (seletor) {
			função de retorno (elem) {
				return Sizzle (seletor, elem) .length> 0;
			};
		}),

		"contém": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			função de retorno (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (texto)> -1;
			};
		}),

		// "Se um elemento é representado por um seletor: lang ()
		// baseia-se unicamente no valor da linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor do idioma do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (função (idioma) {
			// lang value deve ser um identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("idioma não suportado:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			função de retorno (elem) {
				var elemLang;
				Faz {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang")))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retorna falso;
			};
		}),

		// Diversos
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		}

		"root": function (elem) {
			return elem === docElem;
		}

		"focus": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		}

		// Boolean properties
		"enabled": createDisabledPseudo (false),
		"desativado": createDisabledPseudo (true),

		"checked": function (elem) {
			// Em CSS3,: checked deve retornar os elementos marcados e selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		}

		"selected": function (elem) {
			// Acessar esta propriedade torna selecionado por padrão
			// opções no Safari funcionam corretamente
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}

		// Conteúdos
		"vazio": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vazio é negado pelo elemento (1) ou pelos nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType <6 funciona porque os atributos (2) não aparecem como filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retorna falso;
				}
			}
			retorno verdadeiro;
		}

		"pai": function (elem) {
			return! Expr.pseudos ["empty"] (elem);
		}

		// Elemento / tipos de entrada
		"cabeçalho": function (elem) {
			return rheader.test (elem.nodeName);
		}

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		}

		"button": function (elem) {
			nome do var = elem.nodeName.toLowerCase ();
			return name === "input" && elem.type === "button" || nome == "botão";
		}

		"text": function (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Suporte: IE <8
				// Novos valores de atributos HTML5 (por exemplo, "pesquisa") aparecem com elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "texto");
		}

		// Position-in-collection
		"first": createPositionalPseudo (function () {
			return [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			return [comprimento - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, comprimento, argumento) {
			return [argumento <0? argumento + comprimento: argumento];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"ímpar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + comprimento: argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, comprimento, argumento) {
			var i = argumento <0? argumento + comprimento: argumento;
			para (; ++ i <comprimento;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Adicionar botão / tipo de entrada pseudos
para (i em {radio: true, caixa de seleção: true, file: true, senha: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (i em {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para criar novos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (seletor, parseOnly) {
	var correspondido, correspondência, tokens, tipo,
		soFar, grupos, preFilters,
		cached = tokenCache [seletor + ""];

	if (em cache) {
		retornar parseOnly? 0: cached.slice (0);
	}

	soFar = seletor;
	groups = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Vírgula e primeira execução
		if (! correspondido || (match = rcomma.exec (soFar)))) {
			if (match) {
				// Não consuma as vírgulas à direita como válidas
				soFar = soFar.slice (match [0] .length) || tão longe;
			}
			groups.push ((tokens = []));
		}

		correspondido = falso;

		// Combinators
		if ((match = rcombinators.exec (soFar))) {
			correspondido = match.shift ();
			tokens.push ({
				valor: correspondido
				// Conjuga os combinadores descendentes para o espaço
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filters
		para (digite em Expr.filter) {
			if ((match = matchExpr [tipo] .exec (soFar)) && (! preFilters [tipo] ||
				(match = preFilters [tipo] (jogo)))) {
				correspondido = match.shift ();
				tokens.push ({
					valor: correspondido
					tipo: tipo
					fósforos: fósforo
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! correspondido) {
			pausa;
		}
	}

	// Retorna a duração do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, jogue um erro ou retorne tokens
	retornar parseOnly?
		soFar.length:
		tão longe ?
			Sizzle.error (seletor):
			// Cache os tokens
			tokenCache (seletor, grupos) .slice (0);
};

function toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		seletor + = tokens [i] .valor;
	}
	seletor de retorno;
}

function addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		chave = pular || dir,
		checkNonElements = base && key === "parentNode",
		doneName = feito ++;

	return combinator.first?
		// Verifique contra o ancestral mais próximo / elemento anterior
		função (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, contexto, xml);
				}
			}
			retorna falso;
		}:

		// Verifica todos os elementos anteriores / anteriores
		função (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Não podemos definir dados arbitrários em nós XML, para que eles não se beneficiem do armazenamento em cache de combinadores
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, contexto, xml)) {
							retorno verdadeiro;
						}
					}
				}
			} outro {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Suporte: IE <9 apenas
						// Defesa contra attroperties clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (ignorar && ignorar === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [chave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Atribuir ao newCache para que os resultados sejam propagados para os elementos anteriores
							return (newCache [2] = oldCache [2]);
						} outro {
							// Reutilizar o newcache para que os resultados sejam propagados para os elementos anteriores
							uniqueCache [key] = newCache;

							// Um ​​jogo significa que terminamos; uma falha significa que temos que continuar a verificar
							if ((newCache [2] = matcher (elem, contexto, xml))) {
								retorno verdadeiro;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

função elementMatcher (matchers) {
	return matchers.length> 1?
		função (elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if (! matchers [i] (elem, contexto, xml)) {
					retorna falso;
				}
			}
			retorno verdadeiro;
		}:
		Correspondentes [0];
}

function multipleContexts (seletor, contextos, resultados) {
	var i = 0,
		len = contextts.length;
	para (; i <len; i ++) {
		Sizzle (seletor, contextos [i], resultados);
	}
	retornar resultados;
}

função condensar (incomparável, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = tamanho incomparável
		mapped = map! = null;

	para (; i <len; i ++) {
		if ((elem = sem correspondência [i])) {
			if (! filter || filter (elem, contexto, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

função setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (função (semente, resultados, contexto, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexistente = results.length,

			// Obtém elementos iniciais da semente ou contexto
			elems = semente || multipleContexts (seletor || "*", context.nodeType? [contexto]: contexto, []),

			// Prefilter para obter a entrada do matcher, preservando um mapa para sincronização de resultados de semente
			matcherIn = preFilter && (seed ||! seletor)?
				condensar (elems, preMap, preFilter, contexto, xml):
				elems

			matcherOut = matcher?
				// Se tivermos um postFinder ou uma semente filtrada, ou um postFilter sem semente ou resultados preexistentes,
				postFinder || (seed? preFilter: preexisting || postFilter)?

					// ... o processamento intermediário é necessário
					[]:

					// ... caso contrário, use resultados diretamente
					resultados :
				matcherIn;

		// Encontrar correspondências primárias
		if (matcher) {
			matcher (matcherIn, matcherOut, contexto, xml);
		}

		// Apply postFilter
		if (postFilter) {
			temp = condense (matcherOut, postMap);
			postFilter (temp, [], contexto, xml);

			// Desfaça a correspondência dos elementos com falha, movendo-os de volta ao matcherIn
			i = temp.length;
			enquanto eu-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (seed) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtenha o matcherOut final condensando este intermediário em contextos do postFinder
					temp = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn desde que elem ainda não é uma partida final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mover elementos combinados da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (semente, elem): preMap [i])> -1) {

						semente [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Adicionar elementos aos resultados, por meio do postFinder, se definido
		} outro {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexisting, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (null, resultados, matcherOut, xml);
			} outro {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

função matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadingRelative || Expr.relative [""],
		i = leadingRelative? 1: 0,

		// O comparador básico garante que os elementos sejam alcançáveis ​​a partir de contextos de nível superior
		matchContext = addCombinator (função (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || contexto! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, contexto, xml):
					matchAnyContext (elem, contexto, xml));
			// Evite pendurar no elemento (questão 299)
			checkContext = null;
			retorno ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} outro {
			matcher = Expr.filter [tokens [i] .type] .apply (nulo, tokens [i] .matches);

			// Retorno especial ao ver um matcher posicional
			if (matcher [expando]) {
				// Encontre o próximo operador relativo (se houver) para manuseio correto
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						pausa;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Se o token precedente for um combinador descendente, insira um qualquer elemento implícito `*`
						tokens.slice (0, i - 1) .concat ({valor: tokens [i - 2]. tipo === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					matcher
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (correspondentes);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (semente, contexto, xml, resultados, outermost) {
			var elem, j, matcher,
				correspondedCount = 0,
				eu = "0",
				incomparável = semente && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Devemos ter sempre elementos de semente ou contexto mais externo
				elems = semente || byElement && Expr.find ["TAG"] ("*", ultraperiférico),
				// Use dirruns inteiros iff este é o correspondente mais externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (mais externo) {
				outermostContext = context === document || contexto || mais externo;
			}

			// Adicionar elementos transmitindo elementMatchers diretamente aos resultados
			// Suporte: IE <9, Safari
			// Tolerate propriedades de NodeList (IE: "length"; Safari: <number>) elementos correspondentes por id
			para (; i! == len && (elem = elems [i])! = nulo; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++]))) {
						if (matcher (elem, contexto || documento, xml)) {
							results.push (elem);
							pausa;
						}
					}
					if (mais externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Acompanhe elementos incomparáveis ​​para filtros definidos
				if (bySet) {
					// Eles terão passado por todos os possíveis matchers
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alongar a matriz para cada elemento, correspondido ou não
					if (seed) {
						unmatched.push (elem);
					}
				}
			}

			// `i` é agora a contagem dos elementos visitados acima e adicioná-lo ao` matchedCount`
			// torna o último não-negativo.
			matchedCount + = i;

			// Aplique filtros de conjuntos a elementos não correspondentes
			// NOTA: Isto pode ser pulado se não houver elementos sem correspondência (isto é, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _qualquer_ elementos no ciclo acima porque temos
			// sem correspondência de elementos e sem semente.
			// Incrementando uma string inicial "0" `i` permite que` i` permaneça uma string somente naquele
			// case, que resultará em um "00" `matchedCount` que difere de` i` mas também é
			// numericamente zero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++]))) {
					matcher (incomparável, setMatched, contexto, xml);
				}

				if (seed) {
					// Reintegre as correspondências de elementos para eliminar a necessidade de classificação
					if (correspondido> 0) {
						enquanto eu-- ) {
							if (! (unmatched [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descarta os valores de espaço reservado do índice para obter apenas correspondências reais
					setMatched = condense (setMatched);
				}

				// Adicionar correspondências aos resultados
				push.apply (resultados, setMatched);

				// O conjunto sem sementes coincide com vários sucessivos participantes que estipulam a classificação
				if (outermost &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Substituir a manipulação de globals por correspondentes aninhados
			if (mais externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retornar sem correspondência;
		};

	return bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (seletor, match / * somente uso interno * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compiladorCache [seletor + ""];

	if (! cacheado) {
		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if (! match) {
			match = tokenize (seletor);
		}
		i = match.length;
		enquanto eu-- ) {
			cached = matcherFromTokens (correspondência [i]);
			if (em cache [expando]) {
				setMatchers.push (em cache);
			} outro {
				elementMatchers.push (em cache);
			}
		}

		// Cache da função compilada
		cached = compilerCache (seletor, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Salvar seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
};

/ **
 * Uma função de seleção de baixo nível que funciona com o compilado do Sizzle
 * funções de seletor
 * @param {String | Function} selector Um seletor ou um pré-compilado
 * função de seletor construída com o Sizzle.compile
 Contexto @param {Element}
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para combinar
 * /
select = Sizzle.select = function (seletor, contexto, resultados, seed) {
	var i, tokens, token, tipo, encontrar,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = seletor de compilado || seletor));

	resultados = resultados || [];

	// Tente minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante contexto)
	if (match.length === 1) {

		// Reduzir contexto se o seletor composto principal for um ID
		tokens = match [0] = corresponde a [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). tipo === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), contexto) || []) [0];
			if (! contexto) {
				retornar resultados;

			// Correspondentes pré-compilados ainda verificarão a ascendência, portanto, suba um nível
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Buscar um seed set para a correspondência da direita para a esquerda
		i = matchExpr ["needsContext"]. teste (seletor)? 0: tokens.length;
		enquanto eu-- ) {
			token = tokens [i];

			// Abortar se acertarmos um combinador
			if (Expr.relative [(type = token.type)]) {
				pausa;
			}
			if ((find = Expr.find [tipo])) {
				// Pesquisa, contexto em expansão para os principais combinadores de irmãos
				if ((seed = encontrar (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Se a semente estiver vazia ou nenhum token permanecer, podemos voltar mais cedo
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semente);
						retornar resultados;
					}

					pausa;
				}
			}
		}
	}

	// Compile e execute uma função de filtragem, se uma não for fornecida
	// Fornece `match` para evitar a retokenização se modificarmos o seletor acima
	(compilado || compile (selector, match)) (
		semente,
		contexto,
		! documentIsHTML,
		resultados,
		contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	retornar resultados;
};

// Atribuições únicas

// Ordenar estabilidade
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Suporte: Chrome 14 a 35 ou mais
// Sempre assume duplicatas se elas não forem passadas para a função de comparação
support.detectDuplicates = !! hasDuplicate;

// Initialize no documento padrão
setDocument ();

// Suporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corrigido no Chrome 27)
// Os nós destacados seguem-se confusamente * uns aos outros *
support.sortDetached = assert (função (el) {
	// Deve retornar 1, mas retorna 4 (seguinte)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Suporte: IE <8
// Prevenir atributo / propriedade "interpolação"
// https://msdn.microsoft.com/pt-br/library/ms536429%28VS.85%29.aspx
if (! assert (função (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | largura", função (elem, nome, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Suporte: IE <9
// Use defaultValue no lugar de getAttribute ("value")
if (! support.attributes ||! assert (função (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("value", "");
	return el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("valor", função (elem, nome, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "entrada") {
			return elem.defaultValue;
		}
	});
}

// Suporte: IE <9
// Use getAttributeNode para buscar booleanos quando o getAttribute reside
if (! assert (função (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleanos, função (elem, nome, isXML) {
		var val;
		if (! isXML) {
			return elem [name] === true? name.toLowerCase ():
					(val = elem.getAttributeNode (name)) && val.specified?
					val.value:
				nulo;
		}
	});
}

voltar Sizzle;

}) (janela);



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Descontinuada
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, até) {
	var correspondido = [],
		truncate = até! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncado && jQuery (elem) .é (até)) {
				pausa;
			}
			matched.push (elem);
		}
	}
	retorno correspondido;
};


var siblings = function (n, elem) {
	var correspondido = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			correspondência.push (n);
		}
	}

	retorno correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implemente a funcionalidade idêntica para filtro e não
função winnow (elementos, qualificador, não) {
	if (isFunction (qualificador)) {
		return jQuery.grep (elementos, função (elem, i) {
			return !! qualifier.call (elem, i, elem)! == não;
		});
	}

	// Single elemento
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, função (elem) {
			return (elem === qualifier)! == não;
		});
	}

	// Arraylike de elementos (jQuery, arguments, Array)
	if (tipo de qualificador! == "string") {
		return jQuery.grep (elementos, função (elem) {
			return (indexOf.call (qualificador, elem)> -1)! == não;
		});
	}

	// Filtrado diretamente para seletores simples e complexos
	return jQuery.filter (qualificador, elementos, não);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	se não ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, função (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	find: function (seletor) {
		var i, ret,
			len = this.length,
			self = isso;

		if (tipo de seletor! == "string") {
			return this.pushStack (jQuery (seletor) .filter (função () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], isso)) {
						retorno verdadeiro;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (seletor, self [i], ret);
		}

		retornar len> 1? jQuery.uniqueSort (ret): ret;
	}
	filter: function (selector) {
		return this.pushStack (winnow (isso, seletor || [], falso));
	}
	não: function (selector) {
		return this.pushStack (winnow (isso, seletor || [], true));
	}
	é: função (seletor) {
		retorno !! winnow (
			isto,

			// Se este for um seletor posicional / relativo, verifique a associação no conjunto retornado
			// so $ ("p: first"). is ("p: last") não retornará true para um doc com dois "p".
			typeof selector === "string" && rneedsContext.test (seletor)?
				jQuery (seletor):
				seletor || []
			falso
		).comprimento;
	}
});


// Inicializa um objeto jQuery


// Uma referência central à raiz jQuery (document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorize #id sobre <tag> para evitar XSS via location.hash (# 9521)
	// Reconhecimento estrito de HTML (# 11290: deve começar com <)
	// Atalho simples caso #id para velocidade
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (seletor, contexto, raiz) {
		var match, elem;

		// HANDLE: $ (""), $ (null), $ (undefined), $ (false)
		if (! selector) {
			devolva isto;
		}

		// Método init () aceita um rootjQuery alternativo
		// então migrar pode suportar jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Lidar com strings HTML
		if (tipo de seletor === "string") {
			if (seletor [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Assuma que as strings que começam e terminam com <> são HTML e pulam a verificação de regex
				match = [nulo, seletor, nulo];

			} outro {
				match = rquickExpr.exec (seletor);
			}

			// Corresponda o html ou certifique-se de que nenhum contexto esteja especificado para #id
			if (match && (match [1] ||! contexto)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					context = context instanceof jQuery? contexto [0]: contexto;

					// A opção para executar scripts é verdadeira para o back-compat
					// Intencionalmente deixe o erro ser lançado se parseHTML não estiver presente
					jQuery.merge (isso, jQuery.parseHTML (
						jogo [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						verdade
					));

					// HANDLE: $ (html, adereços)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (contexto)) {
						para (corresponder no contexto) {

							// As propriedades do contexto são chamadas como métodos, se possível
							if (isFunction (este [jogo])) {
								isto [partida] (contexto [partida]);

							// ... e definido de outra forma como atributos
							} outro {
								this.attr (correspondência, contexto [correspondência]);
							}
						}
					}

					devolva isto;

				// HANDLE: $ (# id)
				} outro {
					elem = document.getElementById (correspondência [2]);

					if (elem) {

						// Injetar o elemento diretamente no objeto jQuery
						isso [0] = elem;
						this.length = 1;
					}
					devolva isto;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexto || root) .find (seletor);

			// HANDLE: $ (expr, contexto)
			// (que é equivalente a: $ (context) .find (expr)
			} outro {
				return this.constructor (contexto) .find (seletor);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = seletor;
			this.length = 1;
			devolva isto;

		// HANDLE: $ (função)
		// Atalho para o documento pronto
		} else if (isFunction (seletor)) {
			retorno root.ready! == indefinido?
				root.ready (seletor):

				// Executar imediatamente se pronto não estiver presente
				seletor (jQuery);
		}

		return jQuery.makeArray (seletor, isso);
	};

// Fornece a função init o protótipo jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: pais | prev (?: Até | Todos)) /,

	// Métodos garantidos para produzir um conjunto exclusivo ao começar de um conjunto exclusivo
	guaranteedUnique = {
		crianças: verdade
		conteúdo: true
		próximo: verdadeiro
		prev: true
	};

jQuery.fn.extend ({
	tem: function (target) {
		var targets = jQuery (target, this),
			l = targets.length;

		return this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (isso, alvos [i])) {
					retorno verdadeiro;
				}
			}
		});
	}

	mais próximo: function (selectors, context) {
		var cur,
			i = 0,
			l = this.length,
			correspondido = [],
			targets = typeof selectors! == "string" && jQuery (seletores);

		// Os seletores posicionais nunca correspondem, pois não há contexto de seleção_
		if (! rneedsContext.test (selectors)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == contexto; cur = cur.parentNode) {

					// Sempre pule fragmentos de documentos
					if (cur.nodeType <11 && (destinos?
						alvos.index (cur)> -1:

						// Não passe não-elementos para Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, seletores))) {

						correspondência.push (cur);
						pausa;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (correspondido): correspondido);
	}

	// Determinar a posição de um elemento dentro do conjunto
	index: function (elem) {

		// Nenhum argumento, índice de retorno no pai
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Index no seletor
		if (typeof elem === "string") {
			return indexOf.call (jQuery (elem), este [0]);
		}

		// Localize a posição do elemento desejado
		return indexOf.call (isso,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery? elem [0]: elem
		);
	}

	add: function (seletor, contexto) {
		return this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (seletor, contexto))
			)
		);
	}

	addBack: function (selector) {
		return this.add (selector == null?
			this.prevObject: this.prevObject.filter (seletor)
		);
	}
});

função irmão (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	return cur;
}

jQuery.each ({
	parent: function (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? pai: nulo;
	}
	parents: function (elem) {
		return dir (elem, "parentNode");
	}
	parentsUntil: function (elem, i, until) {
		return dir (elem, "parentNode", até);
	}
	próximo: função (elem) {
		return irmão (elem, "nextSibling");
	}
	prev: function (elem) {
		return irmão (elem, "previousSibling");
	}
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	}
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	}
	nextUntil: function (elem, i, until) {
		return dir (elem, "nextSibling", até);
	}
	prevUntil: function (elem, i, until) {
		return dir (elem, "previousSibling", até);
	}
	irmãos: function (elem) {
		return siblings ((elem.parentNode || {}) .firstChild, elem);
	}
	children: function (elem) {
		retornar irmãos (elem.firstChild);
	}
	conteúdo: função (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Suporte: somente para o IE 9-11, somente iOS 7, navegador Android <= 4.3 somente
        // Trate o elemento do template como regular em navegadores que
        // não suporta.
        if (nodeName (elem, "template")) {
            elem = elem.content || elem;
        }

        return jQuery.merge ([], elem.childNodes);
	}
}, function (name, fn) {
	jQuery.fn [name] = function (até, seletor) {
		var correspondido = jQuery.map (isso, fn, até);

		if (name.slice (-5)! == "Até") {
			seletor = até;
		}

		if (selector && typeof selector === "string") {
			correspondido = jQuery.filter (selector, correspondido);
		}

		if (this.length> 1) {

			// Remover duplicatas
			if (! guaranteedUnique [nome]) {
				jQuery.uniqueSort (correspondido);
			}

			// Ordem inversa para pais * e derivados anteriores
			if (rparentsprev.test (name)) {
				correspondido.reverse ();
			}
		}

		return this.pushStack (correspondido);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Converter opções formatadas em string em formatadas em objetos
function createOptions (opções) {
	objeto var = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [flag] = true;
	});
	objeto de retorno;
}

/ *
 * Crie uma lista de retorno usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaço que irá mudar a forma como
 * a lista de retorno de chamada se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada atuará como uma lista de retorno de chamada de evento e poderá ser
 * "disparou" várias vezes.
 *
 * Possíveis opções:
 *
 * uma vez: garantirá que a lista de retorno só possa ser acionada uma vez (como um Diferido)
 *
 * memória: irá acompanhar os valores anteriores e chamará qualquer retorno de chamada
 * após a lista ter sido demitida imediatamente com o último "memorizado"
 * valores (como um diferido)
 *
 * exclusivo: garantirá que um retorno de chamada só possa ser adicionado uma vez (nenhuma duplicata na lista)
 *
 * stopOnFalse: interrompe os chamados quando um callback retorna false
 *
 * /
jQuery.Callbacks = function (options) {

	// Converter opções do formato String para Formatado por objeto, se necessário
	// (nós checamos o cache primeiro)
	options = typeof options === "string"?
		createOptions (opções):
		jQuery.extend ({}, opções);

	var // Sinalizar para saber se a lista está sendo disparada no momento
		queima,

		// Último valor de fogo para listas não esquecíveis
		memória,

		// Sinalizar para saber se a lista já foi disparada
		disparamos,

		// Sinalizar para evitar disparar
		bloqueado

		// Lista de retorno real
		list = [],

		// Fila de dados de execução para listas repetíveis
		fila = []

		// Índice de retorno de chamada no momento (modificado por adicionar / remover conforme necessário)
		firingIndex = -1,

		// Fire callbacks
		fire = function () {

			// Aplicar o disparo único
			bloqueado = bloqueado || options.once;

			// Execute callbacks para todas as execuções pendentes,
			// respeitando as sobreposições de firingIndex e as mudanças de tempo de execução
			fired = firing = true;
			para (; queue.length; firingIndex = -1) {
				memória = queue.shift ();
				while (++ firingIndex <list.length) {

					// Executa o retorno de chamada e verifica se há rescisão antecipada
					if (listar [firingIndex] .apply (memória [0], memória [1]) === false &&
						options.stopOnFalse) {

						// Pula para o final e esquece os dados, por isso o .add não volta a disparar
						firingIndex = list.length;
						memória = falsa;
					}
				}
			}

			// Esqueça os dados se terminarmos com isso
			if (! options.memory) {
				memória = falsa;
			}

			disparo = falso;

			// Limpar se terminarmos de vez
			if (locked) {

				// Mantenha uma lista vazia se tivermos dados para futuras chamadas adicionais
				if (memória) {
					list = [];

				// Caso contrário, esse objeto é gasto
				} outro {
					list = "";
				}
			}
		}

		// Objeto de retorno de chamada real
		self = {

			// Adicionar um retorno de chamada ou uma coleção de retornos de chamada à lista
			add: function () {
				if (list) {

					// Se tivermos memória de uma corrida passada, devemos disparar depois de adicionar
					if (memory &&! firing) {
						firingIndex = list.length - 1;
						queue.push (memória);
					}

					(função add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "string") {

								// Inspecionar recursivamente
								adicionar (arg);
							}
						});
					}) (argumentos);

					if (memory &&! firing) {
						fogo();
					}
				}
				devolva isto;
			}

			// Remover um retorno de chamada da lista
			remove: function () {
				jQuery.each (argumentos, função (_, arg) {
					var index;
					while ((index = jQuery.inArray (arg, lista, índice))> -1) {
						list.splice (índice, 1);

						// Lidar com índices de disparo
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devolva isto;
			}

			// Verifique se um determinado retorno de chamada está na lista.
			// Se nenhum argumento for fornecido, retorne se a lista possui ou não retornos de chamada anexados.
			tem: function (fn) {
				devolver fn?
					jQuery.inArray (fn, list)> -1:
					list.length> 0;
			}

			// Remove todos os retornos de chamada da lista
			empty: function () {
				if (list) {
					list = [];
				}
				devolva isto;
			}

			// Desativar .fire e .add
			// Anula quaisquer execuções atuais / pendentes
			// Limpar todos os retornos de chamada e valores
			disable: function () {
				locked = queue = [];
				list = memory = "";
				devolva isto;
			}
			disabled: function () {
				retornar lista;
			}

			// Desativar .fire
			// Também desativa o .add a menos que tenhamos memória (já que não teria efeito)
			// Anular quaisquer execuções pendentes
			lock: function () {
				locked = queue = [];
				if (! memory &&! firing) {
					list = memory = "";
				}
				devolva isto;
			}
			bloqueado: function () {
				retorno !! trancado;
			}

			// Chama todos os retornos de chamada com o contexto e argumentos fornecidos
			fireWith: function (context, args) {
				if (! locked) {
					args = args || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (args);
					if (! firing) {
						fogo();
					}
				}
				devolva isto;
			}

			// Chame todos os retornos de chamada com os argumentos fornecidos
			fire: function () {
				self.fireWith (isso, argumentos);
				devolva isto;
			}

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function () {
				retorno !! despedido;
			}
		};

	retorno auto;
};


Identidade de função (v) {
	return v;
}
função Thrower (ex) {
	jogue ex;
}

function adoptValue (valor, resolver, rejeitar, noValor) {
	método var;

	experimentar {

		// Verifique primeiro o aspecto da promessa para privilegiar o comportamento síncrono
		if (valor && éFunção ((método = valor.promise))) {
			method.call (valor) .done (resolve) .fail (rejeitar);

		// Outros thenables
		} else if (valor && éFunção ((método = valor.depois))) {
			method.call (valor, resolução, rejeição);

		// Outros não -áveis
		} outro {

			// Controlar os argumentos `resolve` deixando a matriz Array # converter o` noValue` booleano em inteiro:
			// * false: [value] .slice (0) => resolver (valor)
			// * true: [valor] .slice (1) => resolver ()
			resolve.apply (indefinido, [valor] .slice (semValor));
		}

	// Para Promessas / A +, converta exceções em rejeições
	// Desde que jQuery.when não se desenrola, podemos pular as verificações extras que aparecem em
	// Deferred # then para suprimir condicionalmente a rejeição.
	} catch (valor) {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call / .apply obtêm contexto de objeto global
		reject.apply (indefinido, [valor]);
	}
}

jQuery.extend ({

	Adiada: function (func) {
		var tuples = [

				// ação, adicionar ouvinte, retornos de chamada,
				// ... então manipuladores, índice de argumentos, [estado final]
				["notificar", "progresso", jQuery.Callbacks ("memória"),
					jQuery.Callbacks ("memory"), 2],
				["resolver", "feito", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 0, "resolved"],
				["reject", "fail", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 1, "rejected"]
			]
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				}
				sempre: function () {
					deferred.done (arguments) .fail (argumentos);
					devolva isto;
				}
				"catch": function (fn) {
					return promise.then (null, fn);
				}

				// Keep pipe para back-compat
				pipe: função (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, função (i, tupla) {

							// Mapeie tuplas (progresso, feito, falhe) para argumentos (concluído, falha, progresso)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {bind para newDefer ou newDefer.notify})
							// deferred.done (function () {bind para newDefer ou newDefer.resolve})
							// deferred.fail (function () {bind para newDefer ou newDefer.reject})
							deferred [tuple [1]] (function () {
								var returned = fn && fn.apply (isto, argumentos);
								if (retornado && isFunction (returned.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} outro {
									newDefer [tuple [0] + "com"] (
										isto,
										fn? [retornou]: argumentos
									);
								}
							});
						});
						fns = nulo;
					} ).promessa();
				}
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					função resolve (profundidade, adiada, manipulador, especial) {
						função de retorno () {
							var isso = isso,
								args = argumentos,
								mightThrow = function () {
									var retornou, então;

									// Suporte: Promessas / A + seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if (profundidade <maxDepth) {
										Retorna;
									}

									retornado = handler.apply (que, args);

									// Suporte: Promessas / A + seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (retornado === deferred.promise ()) {
										throw new TypeError ("Auto-resolução de subida");
									}

									// Suporte: Promessas / A + seções 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupera `then` apenas uma vez
									então = retornado &&

										// Suporte: Promessas / A + seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Somente verifica objetos e funções para thenability
										(typeof retornado === "objeto" ||
											typeof retornado === "function") &&
										retornado.

									// Lidar com um letreiro retornado
									if (isFunction (então)) {

										// Processadores especiais (notificar) aguardem resolução
										if (especial) {
											Em seguida, ligue(
												retornou,
												resolver (maxDepth, deferred, Identity, special),
												resolver (maxDepth, deferred, Thrower, special)
											);

										// Processadores normais (resolver) também se conectam ao progresso
										} outro {

											// ... e desconsiderar valores de resolução mais antigos
											maxDepth ++;

											Em seguida, ligue(
												retornou,
												resolver (maxDepth, deferred, Identity, special),
												resolver (maxDepth, diferido, Thrower, especial),
												resolve (maxDepth, deferred, Identity,
													deferred.notifyWith)
											);
										}

									// Lidar com todos os outros valores retornados
									} outro {

										// Apenas os manipuladores substitutos passam no contexto
										// e vários valores (comportamento sem especificação)
										if (handler! == Identity) {
											isso = indefinido;
											args = [retornado];
										}

										// Processar o (s) valor (es)
										// O processo padrão é a resolução
										(special || deferred.resolveWith) (que, args);
									}
								}

								// Somente processadores normais (resolvem) capturam e rejeitam exceções
								process = especial?
									mightThrow:
									function () {
										experimentar {
											mightThrow ();
										} pegar (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Suporte: Promessas / A + seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar exceções pós-resolução
											if (profundidade + 1> = maxDepth) {

												// Apenas os manipuladores substitutos passam no contexto
												// e vários valores (comportamento sem especificação)
												if (handler! == lançador) {
													isso = indefinido;
													args = [e];
												}

												deferred.rejectWith (que, args);
											}
										}
									};

							// Suporte: Promessas / A + seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolver promessas imediatamente para evitar a falsa rejeição de
							// erros subsequentes
							if (profundidade) {
								processo();
							} outro {

								// Chame um gancho opcional para gravar a pilha, em caso de exceção
								// já que é perdido quando a execução é assíncrona
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (processo);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onProgress)?
									em progresso :
									Identidade,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidade
							)
						);

						// rejected_handlers.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Atirador
							)
						);
					} ).promessa();
				}

				// Obtenha uma promessa para este diferido
				// Se obj é fornecido, o aspecto da promessa é adicionado ao objeto
				promessa: function (obj) {
					return obj! = null? jQuery.extend (obj, promessa): promessa;
				}
			}
			adiada = {};

		// Adicionar métodos específicos de lista
		jQuery.each (tuplas, função (i, tupla) {
			var list = tuple [2],
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promessa [tuple [1]] = list.add;

			// Lidar com estado
			if (stateString) {
				list.add (
					function () {

						// state = "resolved" (isto é, preenchido)
						// state = "rejected"
						estado = stateString;
					}

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuplos [3 - i] [2] .disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuplos [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			deferred [tuple [0]] = function () {
				deferred [tuple [0] + "com"] (isto === deferido? indefinido: isto, argumentos);
				devolva isto;
			};

			// deferred.notifyWith = list.fireCom
			// deferred.resolveWith = list.fireCom
			// deferred.rejectWith = list.fireCom
			deferred [tuple [0] + "com"] = lista.fireCom;
		});

		// Faça a promessa adiada
		promise.promise (diferido);

		// Chamar dado func se algum
		if (func) {
			func.call (diferido, diferido);
		}

		// Tudo feito!
		retorno diferido;
	}

	// Auxiliar adiado
	quando: function (singleValue) {
		var

			// contagem de subordinados não concluídos
			restante = arguments.length,

			// contagem de argumentos não processados
			i = restante

			// dados de preenchimento subordinados
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (argumentos),

			// o mestre Deferido
			mestre = jQuery.Deferred (),

			// fábrica de callback subordinado
			updateFunc = função (i) {
				função de retorno (valor) {
					resolveContexts [i] = isto;
					resolveValues ​​[i] = arguments.length> 1? slice.call (argumentos): valor;
					if (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if (restantes <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restante );

			// Use .then () para desembrulhar objetos secundários (cf. gh-3000)
			if (master.state () === "pendente" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i]. então)) {

				return master.then ();
			}
		}

		// Vários argumentos são agregados como os elementos da matriz Promise.all
		enquanto eu-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Estes geralmente indicam um erro do programador durante o desenvolvimento,
// avisa sobre eles o mais rápido possível, em vez de engoli-los por padrão.
var rerrorNames = / ^ (Eval | Internal | Range | Referência | Sintaxe | Tipo | URI) Erro $ /;

jQuery.Deferred.exceptionHook = function (erro, pilha) {

	// Suporte: apenas 8 - 9 do IE
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if (window.console && window.console.warn && erro && rerrorNames.test (error.name)) {
		window.console.warn ("exceção jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		lançar erro;
	});
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	lista pronta
		. então (fn)

		// Quebra jQuery.readyException em uma função para que a pesquisa
		// acontece no momento da manipulação de erros em vez do retorno de chamada
		// cadastro.
		.catch (função (erro) {
			jQuery.readyException (erro);
		});

	devolva isto;
};

jQuery.extend ({

	// O DOM está pronto para ser usado? Defina como verdadeiro quando ocorrer.
	isReady: false,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto é acionado. Veja # 6781
	readyWait: 1,

	// manipular quando o DOM estiver pronto
	pronto: função (espera) {

		// Abortar se houver pendências pendentes ou já estamos prontos
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			Retorna;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = true;

		// Se um evento DOM Ready normal for disparado, decrementado e aguardar, se necessário
		if (wait! == true && --jQuery.readyWait> 0) {
			Retorna;
		}

		// Se houver funções ligadas, executar
		readyList.resolveWith (documento, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de limpeza automática
function completed () {
	document.removeEventListener ("DOMContentLoaded", completed);
	window.removeEventListener ("load", completed);
	jQuery.ready ();
}

// Captura casos em que $ (document) .ready () é chamado
// após o evento do navegador já ter ocorrido.
// Suporte: IE <= 9 - 10 apenas
// IE mais antigo às vezes sinaliza "interativo" cedo demais
if (document.readyState === "completo" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// Lidar de forma assíncrona para permitir que os scripts tenham a oportunidade de atrasar
	window.setTimeout (jQuery.ready);

} outro {

	// Use o callback do evento útil
	document.addEventListener ("DOMContentLoaded", completed);

	// Um ​​fallback para window.onload, que sempre funcionará
	window.addEventListener ("load", completed);
}




// Método multifuncional para obter e definir valores de uma coleção
// O valor / s pode opcionalmente ser executado se for uma função
var access = function (elems, fn, chave, valor, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Define muitos valores
	if (toType (key) === "objeto") {
		Cadeia de caracteres = true;
		para (eu na chave) {
			acesso (elems, fn, i, chave [i], true, emptyGet, raw);
		}

	// Define um valor
	} else if (valor! == indefinido) {
		Cadeia de caracteres = true;

		if (! isFunction (value)) {
			raw = true;
		}

		if (bulk) {

			// Operações em massa são executadas em todo o conjunto
			if (raw) {
				fn.call (elems, valor);
				fn = nulo;

			// ... exceto ao executar valores de função
			} outro {
				bulk = fn;
				fn = function (elem, key, value) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		if (fn) {
			para (; i <len; i ++) {
				fn (
					elems [i], chave, cru?
					valor :
					value.call (elems [i], i, fn (elems [i], chave))
				);
			}
		}
	}

	if (chainable) {
		elems de retorno;
	}

	// Obtém
	if (bulk) {
		return fn.call (elems);
	}

	retornar len? fn (elems [0], chave): emptyGet;
};


// Corresponde a corda tracejada para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Usado pelo camelCase como callback para replace ()
função fcamelCase (all, letter) {
	return letter.toUpperCase ();
}

// Converta tracejado para camelCase; usado pelos módulos css e de dados
// Suporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft esqueceu de dar o prefixo do fornecedor (# 9572)
função camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Qualquer
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




function Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: function (owner) {

		// Verifique se o objeto proprietário já possui um cache
		var value = owner [this.expando];

		// Se não, crie um
		if (! value) {
			valor = {};

			// Podemos aceitar dados para nós que não são elementos em navegadores modernos,
			// mas não devemos, veja # 8335.
			// Sempre retorna um objeto vazio.
			if (acceptData (owner)) {

				// Se é um nó improvável de ser stringificado ou colocado em loop
				// use designação simples
				if (owner.nodeType) {
					owner [this.expando] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser true para permitir que a propriedade seja
				// deletado quando os dados são removidos
				} outro {
					Object.defineProperty (owner, this.expando, {
						valor: valor
						configurável: true
					});
				}
			}
		}

		valor de retorno;
	}
	set: function (owner, data, value) {
		var prop,
			cache = this.cache (dono);

		// Handle: [owner, key, value] args
		// Sempre use a chave camelCase (gh-2257)
		if (tipo de dados === "string") {
			cache [camelCase (data)] = valor;

		// Handle: [owner, {properties}] args
		} outro {

			// Copie as propriedades uma a uma para o objeto de cache
			para (prop em dados) {
				cache [camelCase (prop)] = dados [prop];
			}
		}
		cache de retorno;
	}
	get: function (owner, key) {
		tecla de retorno === indefinida?
			this.cache (owner):

			// Sempre use a chave camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (chave)];
	}
	acesso: função (proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de cadeia foi especificada, mas nenhum valor foi fornecido
		//
		// Pegue o caminho "read" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. O objeto de cache inteiro
		// 2. Os dados armazenados na chave
		//
		if (chave === indefinida ||
				((chave && typeof key === "string") && valor === indefinido)) {

			return this.get (dono, chave);
		}

		// Quando a chave não é uma string ou uma chave e um valor
		// são especificados, configurados ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e valor
		//
		this.set (dono, chave, valor);

		// Como o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base no caminho que foi tomado [*]
		valor de retorno! == indefinido? valor: chave;
	}
	remove: function (owner, key) {
		var i,
			cache = owner [this.expando];

		if (cache === indefinido) {
			Retorna;
		}

		if (chave! == indefinido) {

			// Suporta array ou string de chaves separadas por espaços
			if (Array.isArray (key)) {

				// Se key é uma matriz de chaves ...
				// Sempre definimos as chaves camelCase, então remova isso.
				key = key.map (camelCase);
			} outro {
				key = camelCase (chave);

				// Se existir uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando espaços não whitespace
				chave = chave no cache?
					[ chave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			enquanto eu-- ) {
				delete cache [chave [i]];
			}
		}

		// Remove o expando se não houver mais dados
		if (key === indefinido || jQuery.isEmptyObject (cache)) {

			// Suporte: Chrome <= 35 - 45
			// O desempenho do Webkit & Blink sofre ao excluir propriedades
			// dos nós DOM, portanto, defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (restrição de bugs)
			if (owner.nodeType) {
				owner [this.expando] = indefinido;
			} outro {
				delete owner [this.expando];
			}
		}
	}
	hasData: function (owner) {
		var cache = owner [this.expando];
		cache de retorno! == indefinido &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = novos dados ();

var dataUser = new Data ();



// Resumo da Implementação
//
// 1. Enforce a compatibilidade de superfície e semântica da API com o ramo 1.9.x
// 2. Melhorar a capacidade de manutenção do módulo, reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para suportar dados "privados" e "usuários".
// 4. _Nunca_ expor dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes da implementação em objetos do usuário (ex. Expando properties)
// 6. Fornecer um caminho claro para a implementação da atualização para o WeakMap em 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (data) {
	if (dados === "true") {
		retorno verdadeiro;
	}

	if (dados === "false") {
		retorna falso;
	}

	if (dados === "null") {
		return null;
	}

	// Só converte em um número se não mudar a string
	if (dados === + dados + "") {
		retorno + dados;
	}

	if (rbrace.test (data)) {
		return JSON.parse (data);
	}

	dados de retorno;
}

function dataAttr (elem, key, data) {
	nome var;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo data-* do HTML5
	if (dados === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (nome);

		if (tipo de dados === "string") {
			experimentar {
				dados = getData (dados);
			} pegar (e) {}

			// Certifique-se de que definimos os dados para que não sejam alterados mais tarde
			dataUser.set (elem, key, data);
		} outro {
			dados = indefinidos;
		}
	}
	dados de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	}

	data: function (elem, name, data) {
		return dataUser.access (elem, nome, dados);
	}

	removeData: function (elem, name) {
		dataUser.remove (elem, name);
	}

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para os métodos dataPriv, eles podem ser reprovados.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, nome, dados);
	}

	_removeData: function (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	data: function (key, value) {
		var i, nome, dados,
			elem = isto [0],
			attrs = elem && elem.attributes;

		// Obtém todos os valores
		if (chave === indefinido) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					enquanto eu-- ) {

						// Suporte: apenas no IE 11
						// Os elementos attrs podem ser nulos (# 14894)
						if (attrs [i]) {
							nome = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								nome = camelCase (name.slice (5));
								dataAttr (elem, nome, dados [nome]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if (tipo de chave === "objeto") {
			return this.each (function () {
				dataUser.set (this, key);
			});
		}

		retornar acesso (isso, function (value) {
			var dados;

			// O objeto de chamada jQuery (elemento corresponde) não está vazio
			// (e, portanto, tem um elemento aparece neste [0]) e o
			O parâmetro // `value` não foi indefinido. Um objeto jQuery vazio
			// irá resultar em `undefined` para elem = this [0] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if (elem && value === undefined) {

				// Tentativa de obter dados do cache
				// A chave sempre será camelCased in Data
				data = dataUser.get (elem, key);
				if (dados! == indefinidos) {
					dados de retorno;
				}

				// Tentativa de "descobrir" os dados em
				// dados personalizados HTML5- * attrs
				data = dataAttr (elem, key);
				if (dados! == indefinidos) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				Retorna;
			}

			// Definir os dados ...
			this.each (function () {

				// Sempre armazenamos a chave camelCased
				dataUser.set (isto, chave, valor);
			});
		}, null, value, arguments.length> 1, nulo, verdadeiro);
	}

	removeData: function (key) {
		return this.each (function () {
			dataUser.remove (isto, chave);
		});
	}
});


jQuery.extend ({
	fila: function (elem, type, data) {
		fila var;

		if (elem) {
			type = (digite || "fx") + "fila";
			queue = dataPriv.get (elem, tipo);

			// Acelere o dequeue, saindo rapidamente se isso é apenas uma pesquisa
			if (data) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, tipo, jQuery.makeArray (data));
				} outro {
					fila.push (dados);
				}
			}
			fila de retorno || [];
		}
	}

	dequeue: function (elem, type) {
		type = type || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			ganchos = jQuery._queueHooks (elem, tipo),
			next = function () {
				jQuery.dequeue (elem, tipo);
			};

		// Se a fila fx for retirada da fila, sempre remova o sentinela de progresso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// Adiciona um sentinel de progresso para evitar que a fila de fx seja
			// automaticamente dequeued
			if (tipo === "fx") {
				queue.unshift ("inprogress");
			}

			// Limpar a última função de parada da fila
			delete hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && ganchos) {
			hooks.empty.fire ();
		}
	}

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			empty: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [tipo + "fila", chave]);
			})
		});
	}
});

jQuery.fn.extend ({
	fila: function (type, data) {
		var setter = 2;

		if (typeof type! == "string") {
			data = type;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (este [0], tipo);
		}

		dados de retorno === indefinido?
			isto :
			this.each (function () {
				var queue = jQuery.queue (isso, tipo, dados);

				// Assegure os ganchos para esta fila
				jQuery._queueHooks (isso, tipo);

				if (tipo === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (isso, tipo);
				}
			});
	}
	dequeue: function (type) {
		return this.each (function () {
			jQuery.dequeue (isso, tipo);
		});
	}
	clearQueue: function (type) {
		return this.queue (digite || "fx", []);
	}

	// Obter uma promessa resolvida quando filas de um certo tipo
	// são esvaziados (fx é o tipo por padrão)
	promessa: function (type, obj) {
		var tmp,
			contagem = 1,
			adiar = jQuery.Deferred (),
			elementos = isto,
			i = this.length,
			resolve = function () {
				if (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (typeof type! == "string") {
			obj = type;
			tipo = indefinido;
		}
		type = type || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				contar ++;
				tmp.empty.add (resolve);
			}
		}
		resolver();
		return defer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Top", "Direita", "Inferior", "Esquerda"];

var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree pode ser chamado da função de filtro # jQuery;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elem;

		// O estilo inline supera tudo
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifique o estilo computado
			// Suporte: Firefox <= 43 - 45
			// Elementos desconectados podem ter display computado: none, então primeiro confirme que elem é
			// no documento.
			jQuery.contains (elem.ownerDocument, elem) &&

			jQuery.css (elem, "display") === "nenhum";
	};

var swap = function (elem, opções, callback, args) {
	var ret, nome,
		old = {};

	// Lembre-se dos valores antigos e insira os novos
	para (nome em opções) {
		old [name] = elem.style [name];
		elem.style [name] = opções [name];
	}

	ret = callback.apply (elem, args || []);

	// Reverta os valores antigos
	para (nome em opções) {
		elem.style [name] = old [name];
	}

	retorno ret;
};




function adjustCSS (elem, prop, valueParts, tween) {
	var ajustado, escala
		maxIterations = 20,
		currentValue = tween?
			function () {
				return tween.cur ();
			}:
			function () {
				return jQuery.css (elem, prop, "");
			}
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidade
		initialInUnit = (jQuery.cssNumber [prop] || unidade! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidade) {

		// Suporte: Firefox <= 54
		// Reduz o valor alvo da iteração para evitar a interferência dos limites superiores do CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || initialInUnit [3];

		// Aproximação iterativa de um ponto de partida diferente de zero
		initialInUnit = + inicial || 1;

		while (maxIterations--) {

			// Avalie e atualize nosso melhor palpite (duplicando as suposições de que zerar).
			// Termine se a escala for igual ou cruzar 1 (tornando o antigo * novo produto não positivo).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / inicial || 0.5)) <= 0) {
				maxIterações = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplique o offset relativo (+ = / - =) se especificado
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		if (tween) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (display) {
		exibição de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (exibir === "nenhum") {
		display = "block";
	}
	defaultDisplayMap [nodeName] = display;

	exibição de retorno;
}

function showHide (elementos, show) {
	var display, elem,
		values ​​= [],
		índice = 0,
		length = elements.length;

	// Determina o novo valor de exibição para elementos que precisam mudar
	para (; index <length; index ++) {
		elem = elementos [índice];
		if (! elem.style) {
			continuar;
		}

		display = elem.style.display;
		if (show) {

			// Desde que forçamos visibilidade sobre elementos ocultos em cascata, um imediato (e lento)
			// check é necessário neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (ou
			// inline ou prestes a ser restaurado)
			if (exibir === "nenhum") {
				valores [index] = dataPriv.get (elem, "display") || nulo;
				if (! valores [index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [index] = getDefaultDisplay (elem);
			}
		} outro {
			if (exibir! == "nenhum") {
				valores [index] = "nenhum";

				// Lembre-se do que estamos sobrescrevendo
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Defina a exibição dos elementos em um segundo loop para evitar refluxo constante
	para (índice = 0; índice <comprimento; índice ++) {
		if (valores [index]! = null) {
			elementos [index] .style.display = valores [index];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend ({
	show: function () {
		return showHide (isso, verdadeiro);
	}
	hide: function () {
		return showOcultar (isso);
	}
	toggle: function (state) {
		if (tipo de estado === "booleano") {
			estado de retorno? this.show (): this.hide ();
		}

		return this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} outro {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: checkbox | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i);

var rscriptType = (/ ^ $ | ^ módulo $ | \ / (?: java | ecma) script / i);



// Temos que fechar essas tags para suportar XHTML (# 13200)
var wrapMap = {

	// Suporte: IE <= 9 apenas
	opção: [1, "<select multiple = 'multiple'>", "</ select>"],

	// Analisadores XHTML não inserem magicamente elementos no
	// da mesma maneira que os analisadores de sopa de tag fazem. Então não podemos encurtar
	// isto omitindo <tbody> ou outros elementos requeridos.
	thead: [1, "<table>", "</ table>"],
	col: [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
	td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default: [0, "", ""]
};

// Suporte: IE <= 9 apenas
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll (contexto, tag) {

	// Suporte: IE <= 9 - 11 apenas
	// Use typeof para evitar a invocação do método de argumento zero em objetos de host (# 15151)
	var ret;

	if (tipo de contexto.getElementsByTagName! == "indefinido") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (tipo de contexto.querySelectorAll! == "indefinido") {
		ret = context.querySelectorAll (tag || "*");

	} outro {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (contexto, tag)) {
		return jQuery.merge ([contexto], ret);
	}

	retorno ret;
}


// Marcar scripts como tendo sido avaliados
function setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			REFLETS || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <& & #? \ w +;

function buildFragment (elems, contexto, scripts, seleção, ignorado) {
	var elem, tmp, tag, wrap, contém, j,
		fragment = context.createDocumentFragment (),
		nós = [],
		i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Adicionar nós diretamente
			if (toType (elem) === "objeto") {

				// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
				// push.apply (_, arraylike) é lançado no antigo WebKit
				jQuery.merge (nós, elem.nodeType? [elem]: elem);

			// Converta não-html em um nó de texto
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Converter html em nós DOM
			} outro {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Desserializar uma representação padrão
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Descer pelos wrappers para o conteúdo certo
				j = wrap [0];
				while (j--) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
				// push.apply (_, arraylike) é lançado no antigo WebKit
				jQuery.merge (nós, tmp.childNodes);

				// Lembre-se do contêiner de nível superior
				tmp = fragment.firstChild;

				// Assegure-se de que os nós criados sejam órfãos (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Remover o wrapper do fragmento
	fragment.textContent = "";

	i = 0;
	while ((elem = nós [i ++]))) {

		// Ignora os elementos que já estão na coleção de contexto (trac-4087)
		if (seleção && jQuery.inArray (elem, seleção)> -1) {
			if (ignorado) {
				ignorado.push (elem);
			}
			continuar;
		}

		contains = jQuery.contains (elem.ownerDocument, elem);

		// Anexar ao fragmento
		tmp = getAll (fragment.appendChild (elem), "script");

		// Preservar o histórico de avaliação do script
		if (contém) {
			setGlobalEval (tmp);
		}

		// Capturar executáveis
		if (scripts) {
			j = 0;
			while ((elem = tmp [j ++]))) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	fragmento de retorno;
}


(function () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifique o estado perdido se o nome estiver definido (# 11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e` type` devem usar .setAttribute para WWA (# 14901)
	input.setAttribute ("type", "radio");
	input.setAttribute ("verificado", "verificado");
	input.setAttribute ("name", "t");

	div.appendChild (entrada);

	// Suporte: Android <= 4.1 apenas
	// O WebKit antigo não clona o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Suporte: IE <= 11 apenas
	// Certifique-se de que textarea (e checkbox) defaultValue esteja corretamente clonado
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ chave /,
	rmouseEvent = / ^ (?: mouse | ponteiro | contextmenu | arrastar | soltar) | clique em /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	retorno verdadeiro;
}

function returnFalse () {
	retorna falso;
}

// Suporte: IE <= 9 apenas
// Veja # 13393 para mais informações
function safeActiveElement () {
	experimentar {
		retornar document.activeElement;
	} pegar (err) {}
}

função em (elem, tipos, seletor, dados, fn, um) {
	var origFn, tipo;

	// Tipos podem ser um mapa de tipos / manipuladores
	if (typeof types === "objeto") {

		// (types-Object, selector, data)
		if (tipo de seletor! == "string") {

			// (types-Object, data)
			dados = dados || seletor;
			seletor = indefinido;
		}
		para (tipo em tipos) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );