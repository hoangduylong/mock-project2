package nts.uk.ctx.exio.dom.input.setting.assembly.revise.type.string;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 
 * 桁埋め
 *
 */
@Getter
@AllArgsConstructor
public class Padding {
	
	/** 桁長 */
	private PaddingLength length;
	
	/** 編集方法 */
	private PaddingMethod method;
	
	public String fix(String target) {
		if(this.length.v() < target.length()) {
			// 「編集値」の前部から「コード編集桁」分を切り出して「編集値」とする
			return target.substring(this.length.v());
		}
		else {
			// 編集方法に従って桁数を補完する
			return this.method.complement(target, length.v());
		}
	}
}
