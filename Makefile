#
# Makefile to generate app package
#

# Vars
BLUE=\033[36m
VERT=\033[32m
NORMAL=\033[m

all: usage

usage:
	@echo ""
	@echo "$(BLUE)make package\t\t$(NORMAL)Generate app package"
	@echo ""

package:
	@echo "------------------------------------------------------------------"
	@echo "$(VERT) ### building Package ###$(NORMAL)"
	@echo "------------------------------------------------------------------"
	rm -rf ./target
	mkdir ./target
	tar --exclude='./.git' --exclude='./docker' --exclude='./Makefile' --exclude='./.gitignore' --exclude='./toRemove' --exclude='./uploads'-cvf ./target/app.tar '.'
	gzip ./target/app.tar
	@echo "------------------------------------------------------------------"
	@echo "$(VERT) ### Package generation done, check ./target/app.tar.gz ###$(NORMAL)"
	@echo "------------------------------------------------------------------"
