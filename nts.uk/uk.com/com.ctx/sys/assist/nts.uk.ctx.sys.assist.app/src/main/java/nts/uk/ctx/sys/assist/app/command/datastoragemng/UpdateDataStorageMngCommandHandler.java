package nts.uk.ctx.sys.assist.app.command.datastoragemng;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.transaction.Transactional;

import nts.arc.enums.EnumAdaptor;
import nts.arc.layer.app.command.CommandHandler;
import nts.arc.layer.app.command.CommandHandlerContext;
import nts.uk.ctx.sys.assist.dom.storage.DataStorageMngRepository;
import nts.uk.shr.com.enumcommon.NotUseAtr;

@Stateless
@Transactional
public class UpdateDataStorageMngCommandHandler extends CommandHandler<DataStorageMngCommand> {

	@Inject
	private DataStorageMngRepository repository;

	@Override
	protected void handle(CommandHandlerContext<DataStorageMngCommand> context) {
		DataStorageMngCommand updateCommand = context.getCommand();
		repository.update(updateCommand.getStoreProcessingId(),
				EnumAdaptor.valueOf(updateCommand.getDoNotInterrupt(), NotUseAtr.class));
	}
}
