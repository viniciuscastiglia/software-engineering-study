class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const contagem = new Map();
        for (const letra of s) {
            const atual = contagem.get(letra) || 0;
            contagem.set(letra, atual + 1);}
        for (const letra of t) {
            const atual = contagem.get(letra) || 0;
            contagem.set(letra, atual - 1)
            if (atual === 0) {
                return false
            }
        } return true
        } 
    }