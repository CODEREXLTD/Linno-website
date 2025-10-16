export const decodeHTML = ( html ) => {
	try {
		if ('string' !== typeof html ) {
			return '';
		}
		const parser = new DOMParser();
		const doc = parser.parseFromString( html, 'text/html' );
		return doc.documentElement.textContent || '';
	} catch ( e ) {
		return '';
	}
};
