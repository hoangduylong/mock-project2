package nts.uk.ctx.pereg.dom.person.layout;

import nts.arc.primitive.constraint.CharType;
import nts.arc.primitive.constraint.StringCharType;
import nts.arc.primitive.constraint.StringMaxLength;
import nts.uk.shr.com.primitive.CodePrimitiveValue;
import nts.uk.shr.com.primitive.ZeroPaddedCode;

@StringCharType(CharType.ALPHA_NUMERIC)
@StringMaxLength(3)
@ZeroPaddedCode
public class LayoutCode extends CodePrimitiveValue<LayoutCode>{

	private static final long serialVersionUID = 1L;
	
	public LayoutCode(String rawValue) {
		super(rawValue);
	}

}
