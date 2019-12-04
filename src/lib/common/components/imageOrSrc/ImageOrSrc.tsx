import * as React from 'react';
import createStyles from '@material-ui/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import { Theme } from '@material-ui/core';
import { UploadImageField } from '../uploadImageField/UploadImageField';
import { Image } from '../../types/image/Image';
import Text from 'guestbell-forms/build/components/text/Text';
import WarningIcon from '@material-ui/icons/Warning';
import yellow from '@material-ui/core/colors/yellow';
import Button from 'guestbell-forms/build/components/button/Button';

export interface ImageOrSrcOryState {
  imageId?: number;
  image?: Image;
  src?: string;
  srcSet?: string;
}

export interface ImageOrSrcCustomProps {
  UploadImageField: UploadImageField;
  state: ImageOrSrcOryState;
  onChange: (state: Partial<ImageOrSrcOryState>) => void;
  hideSrcField?: boolean;
  hideSrcSetField?: boolean;
}

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    switchImageButton: {
      position: 'absolute',
      right: -spacing(2),
      top: '50%',
      transform: 'translateY(-50%)',
      color: palette.action.active,
    },
    warningContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing(2),
      backgroundColor: yellow[300],
    },
  });

export type ImageOrSrcProps = ImageOrSrcCustomProps & WithStyles<typeof styles>;

enum ImageTabEnum {
  ImageUploadButton = 0,
  ImageSrc = 1,
}

const ImageOrSrc: React.SFC<ImageOrSrcProps> = props => {
  const { classes, onChange } = props;
  const [imageTab, setImageTab] = React.useState<ImageTabEnum>(
    ImageTabEnum.ImageUploadButton
  );
  return (
    <div className={classes.root}>
      {
        {
          [ImageTabEnum.ImageUploadButton]: (
            <props.UploadImageField
              label="Choose image"
              className="d-flex"
              onChange={(imageId, image) => onChange({ imageId, image })}
              imageId={props.state.imageId}
              existingImage={props.state.image}
              chooseImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
              uploadImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
            />
          ),
          [ImageTabEnum.ImageSrc]: (
            <>
              <div className={classes.warningContainer}>
                <WarningIcon style={{ color: yellow[700] }} />
                <p>
                  Using externally hosted images is unsafe. Consider uploading
                  your content to GusteBell instead.
                </p>
              </div>
              {!props.hideSrcField && (
                <Text
                  label="Url"
                  value={props.state.src}
                  onChange={e => props.onChange({ src: e.target.value })}
                />
              )}
              {!props.hideSrcSetField && (
                <Text
                  tooltip={
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
                      target="_blank"
                    >
                      Learn more about srcset
                    </a>
                  }
                  label="Html srcset"
                  value={props.state.srcSet}
                  onChange={e => props.onChange({ srcSet: e.target.value })}
                />
              )}
            </>
          ),
        }[imageTab]
      }
      <Button
        circular={true}
        noShadow={true}
        onClick={e => {
          e.preventDefault();
          setImageTab(
            imageTab === ImageTabEnum.ImageSrc
              ? ImageTabEnum.ImageUploadButton
              : ImageTabEnum.ImageSrc
          );
        }}
        className={classes.switchImageButton}
      >
        {
          {
            [ImageTabEnum.ImageUploadButton]: <CreateIcon />,
            [ImageTabEnum.ImageSrc]: <ImageIcon />,
          }[imageTab]
        }
      </Button>
    </div>
  );
};

export default withStyles(styles)(ImageOrSrc) as React.ComponentType<
  ImageOrSrcCustomProps
>;
